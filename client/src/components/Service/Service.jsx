import cl from './Service.module.css';

const Service = (props) => {
  return (
    <div className={cl.service}>
      <div className={cl.service__block}>
        <div>{props.name}</div>
        <div className={cl.service__icon}>
          <i className="fas fa-caret-left"></i>
        </div>
      </div>
    </div>
  );
};

export default Service;
