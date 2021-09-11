import toastr from 'toastr';
import {validFormSchema, showValidationsErrors, errorMessagesList} from '.';
import {api} from '../api';

export const addLeadData = async (token, formData) => {
  const payload = {
    dealName: formData.get('dealName'),
    dealSection: formData.get('dealSection'),
    dealExecutor: formData.get('dealExecutor'),
    dealCost: Number(formData.get('dealCost')),
    dealClient: formData.get('dealClient'),
  };

  try {
    await validFormSchema.validate(payload, { abortEarly: false });
  } catch (error) {
    if (Array.isArray(error.inner)) {
      showValidationsErrors(error.inner, errorMessagesList);
    }

    return null;
  }

  const sendData = {
    title: payload.dealName,
    amount: payload.dealCost,
    pipeline: 'new',
    status: formData.get('dealPriority'),
    deadline: new Date(formData.get('deasDeadline')).valueOf().toString(),
    comment: formData.get('dealComment'),
    clientHash: formData.get('clientHash'),
  };

  try {
    await api.addLead(token, JSON.stringify(sendData));
  } catch (error) {
    toastr.error(error.message, 'Ошибка регистрации.');
  };
};
