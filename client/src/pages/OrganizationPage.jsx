import { MDBContainer } from 'mdbreact';
function OrganizationPage() {
  const up = {
    color: 'rgb(34, 34, 34)',
    fontFamily:
      'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '4px',
  };

  const down = {
    color: 'rgb(113, 113, 113)',
    fontFamily:
      'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
  };

  return (
    <MDBContainer>
      <div
        className="organization_page_wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '2rem',
        }}
      ></div>
      <h3>
        <strong>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </strong>
      </h3>
      <hr />
      <div className="organization_page__base_info">
        <div style={{ display: 'flex', marginBottom: '24px' }}>
          <div style={{ marginLeft: '16px' }}>
            <div style={up}>Lorem ipsum lorem ipsum</div>
            <div style={down}>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="organization_page__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <hr />
      <div className="organization_page__services">
        <h5>
          {' '}
          <strong>Lorem ipsum</strong>
        </h5>
      </div>
      <hr />
      <div className="organization_page__maps">
        <h5>
          <strong>Lorem ipsum</strong>
        </h5>
        <div>map</div>
        <h6>
          <strong>Lorem ipsum</strong>
        </h6>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </text>
      </div>
    </MDBContainer>
  );
}

export default OrganizationPage;
