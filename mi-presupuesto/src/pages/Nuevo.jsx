import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMovements } from '../context/movementsContext.js'
import styles from '../styles/Forms.module.css'

export default function Nuevo() {
  const { add } = useMovements()
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { descripcion: '', categoria: '', tipo: 'gasto', monto: '', fecha: '' }
  })
  const nav = useNavigate()
  const onSubmit = (data) => {
    // por ahora validaciones mínimas, se profundizan en Parte 2
    add({ ...data, monto: Number(data.monto) })
    reset()
    nav('/')
  }
  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Descripción
          <input {...register('descripcion', { required: true, minLength: 3 })} />
        </label>
        {errors.descripcion && <span className={styles.err}>Mínimo 3 caracteres</span>}

        <label>Categoría
          <select {...register('categoria', { required: true })} defaultValue="">
            <option value="" disabled>Elegí una categoría</option>
            <option>Alimentación</option>
            <option>Transporte</option>
            <option>Vivienda</option>
            <option>Servicios</option>
            <option>Salud</option>
            <option>Ocio</option>
            <option>Educación</option>
            <option>Ingresos</option>
            <option>Otros</option>
          </select>
        </label>
        {errors.categoria && <span className={styles.err}>Requerido</span>}

        <label>Tipo
          <select {...register('tipo', { required: true })}>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
        </label>

        <label>Monto
          <input type="number" step="0.01" {...register('monto', { required: true, min: 0.01 })} />
        </label>
        {errors.monto && <span className={styles.err}>Monto positivo</span>}

        <label>Fecha
          <input type="date" {...register('fecha', { required: true })} />
        </label>
        {errors.fecha && <span className={styles.err}>Fecha requerida</span>}

        <div className={styles.actions}>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </section>
  )
}

