import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CATEGORIES, TYPES } from '../utils/format.js';
import { transactionSchema } from '../utils/validation.js';
import { formatDateISO } from '../utils/format.js';

export default function TransactionForm({ initialValues, onSubmit, submitLabel = 'Guardar' }) {
  const init = initialValues ?? {
    description: '',
    category: '',
    type: 'gasto',
    amount: '',
    date: formatDateISO(new Date()),
  };

  return (
    <div className="card">
      <Formik
        initialValues={init}
        validationSchema={transactionSchema}
        enableReinitialize
        onSubmit={(values, actions) => {
          const payload = { ...values, amount: Number(values.amount) };
          onSubmit?.(payload);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid" style={{ gap: '1rem' }}>
            <div className="grid cols-3">
              <div className="field">
                <label htmlFor="description">Descripción</label>
                <Field id="description" name="description" className="input" placeholder="Ej. Supermercado" />
                <ErrorMessage name="description" component="div" className="error" />
              </div>

              <div className="field">
                <label htmlFor="category">Categoría</label>
                <Field as="select" id="category" name="category" className="select">
                  <option value="">Seleccionar…</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </Field>
                <ErrorMessage name="category" component="div" className="error" />
              </div>

              <div className="field">
                <label htmlFor="type">Tipo</label>
                <Field as="select" id="type" name="type" className="select">
                  {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </Field>
                <ErrorMessage name="type" component="div" className="error" />
              </div>

              <div className="field">
                <label htmlFor="amount">Monto</label>
                <Field id="amount" name="amount" type="number" className="number" placeholder="0.00" />
                <ErrorMessage name="amount" component="div" className="error" />
              </div>

              <div className="field">
                <label htmlFor="date">Fecha</label>
                <Field id="date" name="date" type="date" className="date" />
                <ErrorMessage name="date" component="div" className="error" />
              </div>
            </div>

            <div className="row" style={{ justifyContent: 'flex-end' }}>
              <button type="submit" className="btn primary" disabled={isSubmitting}>{submitLabel}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
