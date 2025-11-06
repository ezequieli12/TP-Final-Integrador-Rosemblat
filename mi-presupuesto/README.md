# Mi Presupuesto

App web en React para registrar, visualizar y analizar ingresos y gastos con **persistencia en localStorage**, **filtros/búsquedas/orden**, **CRUD**, **tema oscuro** y **gráficos (Recharts)**.

[![React](https://img.shields.io/badge/React-18-61dafb.svg?logo=react&logoColor=000)](#)
[![Vite](https://img.shields.io/badge/Vite-5-646cff.svg?logo=vite&logoColor=fff)](#)
[![Router](https://img.shields.io/badge/React%20Router-6-CA4245.svg?logo=reactrouter)](#)
[![Formik](https://img.shields.io/badge/Formik%20%2B%20Yup-2%20%2B%201-6b46c1.svg)](#)
[![Recharts](https://img.shields.io/badge/Recharts-2-00B8D9.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#)

---

## Características

- **CRUD completo** de movimientos (ingreso/gasto).
- **Filtros, búsqueda y ordenamiento** por texto, tipo, categoría, fecha y monto.
- **Validaciones** con Formik + Yup: descripción, categoría, tipo, monto positivo, fecha válida (no futura).
- **Resumen** con KPIs e **informes gráficos**:
  - Distribución de **gastos por categoría**.
  - **Evolución mensual** (ingresos, gastos y balance).
- **Persistencia** en `localStorage`.
- **Tema oscuro/claro** con toggle global.
- **Ajustes**: limpieza de datos y tema.
- **Buenas prácticas**: componentización, hooks, Context, accesibilidad básica, estilos consistentes.

---

## Pila tecnológica

- **React + Vite**
- **React Router DOM (v6)**
- **Formik + Yup**
- **Recharts**
- **localStorage**
- **CSS**

---

## Instalación

### Prerrequisitos
- **Node.js ≥ 18** y **npm**.

### Pasos
```bash
# 1) Clonar el proyecto
git clone
cd mi-presupuesto

# 2) Instalar dependencias
npm i

# 3) Entorno de desarrollo
npm run dev
# Abre http://localhost:5173/

---

## Capturas de pantalla

### Ajustes
![Ajustes](./src/capturas/Ajustes.png)
![Ajustes (Modo oscuro)](./src/capturas/Ajustes_ModoOscuro.png)

### Movimientos
![Movimientos](./src/capturas/Movimientos.png)
![Movimientos (Modo oscuro)](./src/capturas/Movimientos_ModoOscuro.png)

### Nuevo movimiento
![Nuevo](./src/capturas/Nuevo.png)
![Nuevo (Modo oscuro)](./src/capturas/Nuevo_ModoOscuro.png)

### Resumen
![Resumen](./src/capturas/Resumen.png)
![Resumen (Modo oscuro)](./src/capturas/Resumen_ModoOscuro.png)
