import {
  getPriorities, getClients, getUsers, getLeads,
  deasDeadline, addLeadForm, dealClient, addLeadData, resetForm,
} from '.';

export const initPage = (token) => {
  getPriorities(token);
  getClients(token);
  getUsers(token);
  getLeads(token);
  deasDeadline.valueAsDate = new Date();
  deasDeadline.setAttribute('min', new Date().toISOString().slice(0, 10));

  addLeadForm.onsubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData(addLeadForm);
    console.log(dealClient.dataset.hash);
    formData.append('clientHash', dealClient.dataset.hash);
    addLeadData(token, formData);
  };

  resetForm.onclick = () => {
    addLeadForm.reset();
    deasDeadline.value = new Date().toISOString().slice(0, 10);
  };
};
