import { $host } from './index';

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createType = async (typeService) => {
  const { data } = await $host.post('api/type', typeService);
  return data;
};

export const removeType = async (id) => {
  const { data } = await $host.delete('api/type/' + id);
  return data;
};
