import Service from '../Service/Service';
import cl from './ServiceBlock.module.css';

function ServiceBlock() {
  const services = [
    'социально-трудовые услуги',
    'Консультирование по вопросам самообеспечения',
    'Проведение мероприятий по использованию остаточных трудовых возможностей и обучению доступным профессиональным навыкам',
  ];

  return (
    <div className={cl.service_block}>
      <div className={cl.service_block__header}>
        <h5>
          <strong>Заголовок</strong>
        </h5>
      </div>
      <div className={cl.service_block__body}>
        {services.map((item) => (
          <Service name={item} />
        ))}
      </div>

      <p className="text-center" style={{ fontWeight: '400' }}>
        Показать все
      </p>
    </div>
  );
}

export default ServiceBlock;
