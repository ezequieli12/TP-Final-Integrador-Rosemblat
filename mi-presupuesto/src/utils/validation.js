import * as Yup from 'yup';
import { CATEGORIES } from './format.js';
import { parseISO, isFuture } from './format.js';

export const transactionSchema = Yup.object({
  description: Yup.string().trim().min(3, 'Mínimo 3 caracteres').required('Requerido'),
  category: Yup.string().oneOf(CATEGORIES, 'Categoría inválida').required('Requerido'),
  type: Yup.string().oneOf(['ingreso', 'gasto']).required('Requerido'),
  amount: Yup.number().typeError('Debe ser un número').positive('Debe ser positivo').required('Requerido'),
  date: Yup.string()
    .required('Requerido')
    .test('valid-date', 'Fecha inválida', (v) => !!parseISO(v))
    .test('not-future', 'No puede ser futura', (v) => {
      const d = parseISO(v);
      return d && !isFuture(d);
    }),
});
