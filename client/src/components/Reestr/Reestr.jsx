import React, { useEffect, useState } from 'react';
import { fetchOrganizations } from '../../api/organizationAPI';
import OrganizationItem from '../OrganizationItem/OrganizationItem';
import Pagination from './Pagination';
import Select from './Select';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from '../../utils/pages';
import cl from './Reestr.module.css';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';

function Reestr() {
  const [orgs, setOrgs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [limit, setLimit] = useState(5);

  const [fetchOrgs, isLoading, isError] = useFetching(async (page, limit) => {
    const response = await fetchOrganizations(page, limit);
    const { count, rows } = response;
    setOrgs(rows);
    setTotalPages(getPageCount(count, limit));
  });

  useEffect(() => {
    fetchOrgs(page, limit);
  }, [page, limit]);

  const changePage = (page) => setPage(page);
  const changeLimit = (limit) => {
    setPage(1);
    setLimit(limit);
  };

  return (
    <div className="organizations-wrapper">
      {isLoading && <Spinner />}
      {!isLoading && isError && (
        <Message title={'Произошла ошибка при получении данных'} />
      )}

      {!isError && !isLoading && (
        <div className="organizations">
          <div className={cl.organizations__list}>
            {orgs.length > 0 &&
              orgs.map((item) => (
                <OrganizationItem key={item.id} item={item} />
              ))}
          </div>
          <div className={cl.organizations__navigation}>
            <Pagination
              page={page}
              changePage={changePage}
              totalPages={totalPages}
            />
            <Select
              value={limit}
              onChange={(value) => changeLimit(value)}
              defaultValue="Кол-во элементов на странице"
              options={[
                { value: 5, name: '5' },
                { value: 10, name: '10' },
                { value: 25, name: '25' },
                { value: -1, name: 'Показать все' },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Reestr;
