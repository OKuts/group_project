import '../../../css/style.scss';
import {verifyToken} from '../../globalModules/ferifyToken';
import {outFromApp} from '../../globalModules/outFromApp';
import {loadShowUserName} from '../../globalModules/loadShowUserName';

import { apiDash } from './apiDashboard';

verifyToken();
outFromApp();
loadShowUserName();


const getDeals = async () => {
  try{
    const token = localStorage.getItem('token');
    const deals = await apiDash.leads(token, 10, 1);

    if (deals) {
      const dealsNum = document.getElementById('dealsNum');
      dealsNum.innerHTML = deals.docs.length;
    }

  } catch(error) {console.log(error.message);}
};

getDeals();

const colleagues = async () => {
  try{
    const token = localStorage.getItem('token');
    const users = await apiDash.colleagues(token, 6, 1);

    if (users) {
      const usersNum = document.getElementById('usersNum');
      usersNum.innerHTML = users.docs.length;
    }

  } catch(error) {console.log(error.message);}
};

colleagues();

const clients = async () => {
  try{
    const token = localStorage.getItem('token');
    const clients = await apiDash.colleagues(token, 8, 1);

    if (clients) {
      const clientsNum = document.getElementById('clientsNum');
      clientsNum.innerHTML = clients.docs.length;
    }

  } catch(error) {console.log(error.message);}
};

clients();
