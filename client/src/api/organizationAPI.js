import { $host } from './index';

export const fetchOrganizations = async (page, limits = 10) => {
  const { data } = await $host.get('api/oraganization', {
    params: { page, limits },
  });
  return data;
};

export const fetchOneOrganization = async (id) => {
  const { data } = await $host.get('api/organization/' + id);
  return data;
};
