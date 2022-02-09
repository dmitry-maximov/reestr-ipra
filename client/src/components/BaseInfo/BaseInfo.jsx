import cl from './BaseInfo.module.css';

const BaseInfo = (props) => {
  const { icon, caption, description } = props;
  return (
    <div className={cl.base_info_wrapper}>
      <div className={cl.base_info_icon}>
        <i className={icon}></i>
      </div>
      <div className={cl.base_info_title}>
        <div className={cl.base_info_title__up}>{caption}</div>
        <div className={cl.base_info_title__down}>{description}</div>
      </div>
    </div>
  );
};

export default BaseInfo;
