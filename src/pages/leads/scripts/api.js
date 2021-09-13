import { base } from '../../../constants';

export const api = Object.freeze({
  updateLead: async (token, pipeline, hash) => {
    const response = await fetch(`${base}/leads/${hash}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify({ pipeline }),
    });
    const { data } = await response.json();

    return data;
  },
});
