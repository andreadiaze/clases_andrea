## Docs:

- express: https://expressjs.com/en/starter/hello-world.html
- prettier install: https://prettier.io/docs/install
- prettier config: https://prettier.io/docs/configuration

## Development instructions

Prepare code

- `pnpm run clean`: Delete git ignored files
- `pnpm install`: Install dependencies
- `pnpm approve-builds`: (Optional) Approve post-install scripts
- `pnpm up --latest`: (Optional) Update dependencies to the last version

Format code

- `pnpm run format`: Run prettier
- `pnpm run lint`: Run eslint
- `pnpm run typecheck`: Run type checker

Prepare database

- `docker compose down -v`: (Optional) Destroy development containers and their volumes
- `docker compose up -d`: Launch development containers
- `pnpm run db:generate`: Update migration files
- `pnpm run db:migrate`: Run migrations

Start

- `pnpm run dev`: Run application in development and watch mode

## Dependencies

- [x] prettier
- [x] typescript-eslint | eslint | @eslint/js | globals
  - eslint-config-prettier
  - eslint-plugin-check-file
- [x] typescript | @types/node | tsx | tsc-alias
- [x] express | @types/express
- [x] dotenv
- [x] http-status-codes
- [x] drizzle-orm | drizzle-kit | pg | @types/pg

## To-Do

- [] logger con winston/morgan
- [] documentación api swagger-ui-express
- [] seeders
- [] testing
- [] auth + email

## Requerimientos

Requerimientos para sitio web de nutricionista

1. Objetivo general

Crear una plataforma web privada para pacientes que permita acceder a planes personalizados, visualizar y descargar documentos, registrar datos de entrenamiento y observar métricas corporales de progreso de forma segura.

---

2. Usuarios

2.1. Paciente

Cuenta individual con acceso mediante usuario + contraseña.

Recuperación de contraseña vía correo o WhatsApp (mínimo una opción).

2.2. Profesional (nutricionista / administrador)

Acceso a un panel administrativo exclusivo.

Permisos para gestionar pacientes, subir documentos y actualizar mediciones.

---

3. Panel del Paciente

Una vez autenticado, el paciente tendrá acceso a las siguientes secciones:

3.1. Pauta de alimentación

Visualización interna (PDF incrustado o página HTML).

Posibilidad de descargar la pauta.

Identificación por periodo: ejemplo “Pauta nutricional – Noviembre 2025”.

Importante: el paciente no puede editar esta sección.

3.2. Pauta deportiva (con seguimiento)

Visualización y descarga del documento o rutina base.

Cada ejercicio debe permitir que el paciente registre datos propios, como:

Peso utilizado.

Series completadas.

Nivel de esfuerzo (RPE), opcional.

Notas personales.

Estos registros se guardarán como datos propios del paciente, no modifican el archivo original.

Requerimiento clave:

> Los pacientes deben poder ingresar y guardar datos asociados a su entrenamiento dentro de la pauta deportiva, para facilitar el seguimiento objetivo y personal.

3.3. Antropometría y progreso

Visualización de métricas individuales:

% de grasa

% de músculo

Peso corporal

Mostrar historial mediante gráficos:

Líneas o barras por fecha.

Visualización clara del progreso.

3.4. Anexos

Sección para descargar documentos adicionales.

Organización por categoría o fecha.

---

4. Panel de Administración (Nutricionista)

Debe permitir:

4.1. Gestión de pacientes

Crear, editar y eliminar cuentas.

Resetear contraseñas.

4.2. Subida de documentos individuales

Pauta de alimentación.

Pauta deportiva.

Anexos.

Los documentos deben asociarse a un paciente específico.

4.3. Gestión antropométrica

Ingresar nuevas mediciones (peso, % grasa, % músculo).

Modificar registros previos si es necesario.

Los gráficos del paciente deben actualizarse automáticamente.

4.4. Seguimiento deportivo

Visualizar los registros ingresados por el paciente:

Por ejercicio y por fecha.

Diferentes semanas o ciclos.

Opción de ver tendencias (e.g. peso levantado → aumento/disminución).

---

5. Diseño

Estilo profesional, limpio y moderno.

Colores asociados a salud/bienestar.

Interfaz clara y accesible para personas sin conocimientos técnicos.

---

6. Tecnologías sugeridas (el programador puede proponer otras)

Frontend: React, Angular o Vue (alternativa simple: HTML/CSS/JS).

Backend: Node.js (Express), PHP (Laravel) o Python (Django).

Base de datos: MySQL, PostgreSQL o MongoDB.

Autenticación: encriptación segura de contraseñas + tokens de sesión.

Hosting y dominio: a definir.

---

7. Seguridad

Cada paciente solo ve sus propios datos.

Encriptación de contraseñas.

Datos antropométricos y registros privados.

Respaldo en base de datos (backups automáticos, si es posible).

---

8. Extras opcionales

Notificación al paciente cuando se sube un nuevo documento.

Agenda para reserva de sesiones.

Chat interno (profesional ↔ paciente).

Aplicación móvil futura.
