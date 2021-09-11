import * as yup from 'yup';

export const validFormSchema = yup.object().shape({
  'dealName': yup.string().required('Не заполнено').min(5, 'Минимум 5 символов'),
  'dealSection': yup.string().required('Не выбран тип сделки'),
  'dealExecutor': yup.string().required('Не выбран исполнитель'),
  'dealCost': yup.number('Неверный формат').min(0.01, 'Введите цену сделки'),
  'dealClient': yup.string().required('Не выбран клиент'),
});