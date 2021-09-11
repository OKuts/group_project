
import {changeShowLeads} from './changeShowLeads';
import {api} from '../../../addLead/scripts/api';

export const initLeadsPage = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const { docs } = await api.loadLeads(token, 15, 1);
      const leadsSort = {};
      docs.forEach(item => {
        if (!leadsSort[item.pipeline]) leadsSort[item.pipeline] = [];
        leadsSort[item.pipeline].push(item);
      });
      delete leadsSort['in-progress'];
      changeShowLeads(leadsSort);
    } catch (error) {
      console.error(error.message);
    }
  }
};