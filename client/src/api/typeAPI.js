import { $host } from './index';

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};
