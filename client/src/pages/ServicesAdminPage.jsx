import Category from '../components/Admin/Category';
import Services from '../components/Admin/Services';

function ServicesAdminPage() {
  return (
    <div
      style={{ display: 'flex', width: '100%', padding: '.5rem .5rem 0 .5rem' }}
    >
      <Category />
      <Services />
    </div>
  );
}

export default ServicesAdminPage;
