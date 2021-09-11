import {api} from '../api';
import {setSelectItem, dealLeads, leadsCont} from '.';

export const getLeads = async (token) => {
  try {
    const { docs } = await api.loadLeads(token, 5, 1);
    setSelectItem(docs, leadsCont, dealLeads);
  } catch (error) {
    console.log(error.message);
  }
};