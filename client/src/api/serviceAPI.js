import { $host } from './index';

export const fetchService = async (typeId, limit = 10) => {
  const { data } = await $host.get('api/service', {
    params: { typeId, limit },
  });
  return data;
};
