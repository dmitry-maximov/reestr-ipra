import { MDBContainer } from 'mdbreact';
import cl from '../Breadcrumb/Breadcrumb.module.css';

function Breadcrumb({ title }) {
  return (
    <nav className={cl.breadcrump_wrapper}>
      <MDBContainer>
        <ol className={cl.breadcrump_list}>
          <li>{title}</li>
        </ol>
      </MDBContainer>
    </nav>
  );
}

export default Breadcrumb;
