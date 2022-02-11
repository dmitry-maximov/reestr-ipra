import cl from './Schedule.module.css';

const Schedule = (props) => {
  const { data } = props;
  return (
    <div className={cl.schedule}>
      <div className={cl.schedule__header}>
        <h5>
          <strong>Режим работы</strong>
        </h5>
      </div>
      {data && Object.keys(data) ? (
        <div className={cl.schedule__body}>
          <div className={cl.schedule_item}>
            <div className={cl.schedule_item__up}>
              <h5> понедельник - пятница</h5>
            </div>
            <div className={cl.schedule_item__down}>09.00 - 18.00</div>
          </div>
          <div className={cl.schedule_item}>
            <div className={cl.schedule_item__up}>
              <h5>обед</h5>
            </div>
            <div className={cl.schedule_item__down}>12.00 - 13.00</div>
          </div>
          <div className={cl.schedule_item}>
            <div className={cl.schedule_item__down}>
              суббота, воскресенье - выходной
            </div>
          </div>
        </div>
      ) : (
        <h5 className="text-center p-5">Нет информации</h5>
      )}
    </div>
  );
};

export default Schedule;
