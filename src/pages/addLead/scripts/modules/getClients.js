import {api} from '../api';
import {clientsCont, dealClient } from '.';
import {setClientData} from './setClientData';

export const getClients = async (token) => {
  try {
    const { docs } = await api.loadClients(token, 5, 1);
    setClientData(docs, clientsCont, dealClient );
  } catch (error) {
    console.log(error.message);
  }
};