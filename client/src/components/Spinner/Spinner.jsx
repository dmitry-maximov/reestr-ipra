import cl from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={cl.loader_wrapper}>
      <div className={cl.loader}>
        <div className={cl.loader}>
          <div className={cl.loader}>
            <div className={cl.loader}></div>
          </div>
        </div>
      </div>
      <p className="text-center mt-2">Загрузка</p>
    </div>
  );
};

export default Spinner;
