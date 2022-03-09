import { $host } from './index';

export const createFeedback = async (feedback) => {
  const { data } = await $host.post('api/feedback', feedback);
  return data;
};

export const fetchFeedback = async () => {
  const { data } = await $host.get('api/feedback');
  return data;
};

export const removeFeedback = async (id) => {
  const { data } = await $host.delete('api/feedback/' + id);
  return data;
};
