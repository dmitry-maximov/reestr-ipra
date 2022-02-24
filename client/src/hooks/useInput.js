import { useEffect, useState } from 'react';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [isMinLenError, setIsMinLenError] = useState(false);
  const [isMaxLenError, setIsMaxLenError] = useState(false);
  const [isRerularError, setIsRerularError] = useState(false);
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'minLen':
          value.length < validations[validation]
            ? setIsMinLenError(true)
            : setIsMinLenError(false);
          break;
        case 'maxLen':
          value.length > validations[validation]
            ? setIsMaxLenError(true)
            : setIsMaxLenError(false);
          break;
        case 'regular':
          const regular = validations[validation];
          regular.test(String(value).toLowerCase())
            ? setIsRerularError(false)
            : setIsRerularError(true);
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    setValid(!(isEmpty || isMinLenError || isMaxLenError || isRerularError));
  }, [isEmpty, isMinLenError, isMaxLenError, isRerularError]);

  return {
    isEmpty,
    isMinLenError,
    isMaxLenError,
    isRerularError,
    isValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;
