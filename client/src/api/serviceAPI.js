import { $host } from './index';

export const fetchService = async (typeId, limit = 10) => {
  const { data } = await $host.get('api/service', {
    params: { typeId, limit },
  });
  return data;
};

export const fetchOneService = async (id) => {
  const { data } = await $host.get('api/service/' + id);
  return data;
};

export const createService = async (service) => {
  const { data } = await $host.post('api/service', service);
  return data;
};

export const removeService = async (id) => {
  const { data } = await $host.delete('api/service/' + id);
  return data;
};
