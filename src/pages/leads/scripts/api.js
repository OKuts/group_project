import { base } from '../../../constants';

export const api = Object.freeze({
  updateLead: async (token, pipeline, hash) => {
    const response = await fetch(`${base}/leads/${hash}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': token,
      },
      body: pipeline,
    });
    const { data } = await response.json();

    return data;
  },

  // loadPriorities: async (token) => {
  //   const response = await fetch(`${base}/settings/tags`, {
  //     headers: {'x-token': token},
  //   });
  //   const { data } = await response.json();
  //
  //   return data;
  // },

  // loadLeads: async (token, limit, page) => {
  //   const response = await fetch(`${base}/leads?limit=${limit}&page=${page}`, {
  //     headers: {'x-token': token},
  //   });
  //   const { data } = await response.json();
  //
  //   return data;
  // },
  //
  // loadUsers: async (token, limit, page) => {
  //   const response = await fetch(`${base}/users?limit=${limit}&page=${page}`, {
  //     headers: {'x-token': token},
  //   });
  //   const { data } = await response.json();
  //
  //   return data;
  // },
  //
  // loadLeads: async (token, limit, page) => {
  //   const response = await fetch(`${base}/leads?limit=${limit}&page=${page}`, {
  //     headers: {'x-token': token },
  //   });
  //   const { data } = await response.json();
  //
  //   return data;
  // },

});