import { $host } from './index';

export const createFeedback = async (feedback) => {
  const { data } = await $host.post('api/feedback', feedback);
  return data;
};
