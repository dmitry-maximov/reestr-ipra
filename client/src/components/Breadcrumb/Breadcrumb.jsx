import { MDBContainer } from 'mdbreact';
import cl from '../Breadcrumb/Breadcrumb.module.css';

//TO DO:
function Breadcrumb() {
  return (
    <nav className={cl.breadcrump_wrapper}>
      <MDBContainer>
        <ol className={cl.breadcrump_list}>
          <li>Реестр организаций</li>
        </ol>
      </MDBContainer>
    </nav>
  );
}

export default Breadcrumb;
