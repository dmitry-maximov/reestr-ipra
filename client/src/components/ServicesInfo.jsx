import Service from './Service/Service';

function ServicesInfo(props) {
  const { services } = props;
  const handleClickModal = (e) => {
    e.preventDefault();
    alert('Открыть модальное окно c услугами');
  };
  return (
    <div>
      <h5 style={{ paddingBottom: '1rem' }}>
        <strong>Предоставляемые услуги</strong>
      </h5>

      {services && services.length > 0 ? (
        <>
          <div className="services_wrapper">
            {services.map((item) => (
              <Service key={item.id} name={item} id={item.id} />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              paddingTop: '1rem',
            }}
          >
            <button
              className="btn btn-indigo my-2 waves-effect waves-light"
              onClick={(e) => handleClickModal(e)}
            >
              Показать все услуги
            </button>
          </div>
        </>
      ) : (
        <h6 className="text-center">
          <strong>Услуги не найдены</strong>
        </h6>
      )}
    </div>
  );
}

export default ServicesInfo;
