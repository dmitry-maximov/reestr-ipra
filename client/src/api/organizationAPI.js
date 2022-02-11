import { $host } from './index';

export const fetchOrganizations = async (page, limit = 10) => {
  const { data } = await $host.get('api/organization', {
    params: { page, limit },
  });
  return data;
};

export const fetchOneOrganization = async (id) => {
  const { data } = await $host.get('api/organization/' + id);
  return data;
};
