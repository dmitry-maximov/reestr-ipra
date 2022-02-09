import { ICONS } from '../utils/const';
import BaseInfo from './BaseInfo/BaseInfo';

const BaseInfoList = (props) => {
  const INFO = props.data;
  return (
    <>
      <BaseInfo
        icon={ICONS.full_caption}
        caption={'Полное наименование'}
        description={INFO.fullName}
      />
      <BaseInfo
        icon={ICONS.date}
        caption={'Дата регистрации'}
        description={INFO.registration}
      />
      <BaseInfo
        icon={ICONS.user_boss}
        caption={'Руководитель'}
        description={INFO.supervisor}
      />
      <BaseInfo icon={ICONS.map} caption={'Адрес'} description={INFO.addres} />
      <BaseInfo
        icon={ICONS.phone}
        caption={'Телефон'}
        description={INFO.phone}
      />
      <BaseInfo
        icon={ICONS.email}
        caption={'Электронная почта'}
        description={INFO.email}
      />
    </>
  );
};

export default BaseInfoList;
