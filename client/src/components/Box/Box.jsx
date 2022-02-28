import cl from './Box.module.css';
import ButtonShadow from '../ButtonShadow/ButtonShadow';
import { ICONS } from '../../utils/const';

const Box = ({
  title,
  isAddButton,
  AddButtonHandler,
  isBackButton,
  BackButtonHandler,
  children,
  ...props
}) => {
  return (
    <div {...props} className={cl.box_container}>
      <div className={cl.box_header}>
        <h5>{title || 'Без заголовка'}</h5>

        {isAddButton && (
          <ButtonShadow onClick={AddButtonHandler}>
            <i class={ICONS.plus}></i>
          </ButtonShadow>
        )}
        {isBackButton && (
          <ButtonShadow onClick={BackButtonHandler}>
            <i class={ICONS.back}></i>
          </ButtonShadow>
        )}
      </div>
      <div className={cl.box_content}>{children}</div>
    </div>
  );
};

export default Box;
