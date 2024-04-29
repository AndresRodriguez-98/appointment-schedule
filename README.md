<h1 align="center">📝 Agenda de Citas 📝</h1>

<h2 align="center"> Llevá un registro de tus citas médicas de la manera más sencilla! </h1>

## 🔔 Descripción del Proyecto

- ¡Bienvenido a la Agenda de Citas! El proyecto consiste en crear un backend que pueda ser utilizado en una web destinada a una agenda de citas. Pretende que se pueda llevar un registro de los pacientes, médicos y citas establecidas entre los mismos en una clínica médica.

- Cada cita establecida entre un paciente y un médico determinado, puede ser abonada de forma online mediante el uso de Mercado Pago (MP). Se puede modificar el horario de las mismas y cambiar su estado (cancelada/abonada).

- Además, luego de que la cita se concrete, la aplicación permite devolver un feedback que detalle la misma.

## 📊 Requerimientos:

<h3> GESTIÓN USUARIOS / PACIENTES </h3>
◍ Registro de usuarios <br />
◍ Login de usuarios<br />
◍ Obtener listado de pacientes<br />
◍ Obtener un paciente<br />
◍ Editar perfil del paciente<br />
◍ Eliminar un paciente<br />
◍ Historial de citas del usuario

<h3>GESTIÓN MEDICOS</h3>
◍ Crear médicos<br />
◍ Obtener listado de médicos<br />
◍ Obtener un médico<br />
◍ Eliminar un médico<br />
◍ Historial de citas del médico

<h3>GESTIÓN CITAS</h3>
◍ Crear citas (fecha, hora, profesional)<br />
◍ Obtener citas<br />
◍ Obtener una cita<br />
◍ Cancelar citas<br />
◍  Pago de citas online (MP)<br />
◍  Modificar el horario de las citas<br />
◍  Feedback de la cita.

<h3>AUTENTICACIÓN</h3>
◍ Por medio de Passport implementar, aunque sea 1 autenticación vista en el curso (Local, Github, Google)

<h3>PRUEBAS</h3>
◍ Testear con jest para validar que cada unidad de codigo del sisema funciona correctamente.

<h3>DOCUMENTACIÓN</h3>
◍ Probar todos los endpoints y guardar las pruebas funcionando en una carpeta de Postman.

## 🌀 Tecnologías Utilizadas

<div flex-direction="row">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="128" height="128" />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" width="128" height="128" />
          
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" width="128" height="128" />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="128" height="128" />
          
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="128" height="128" />
            
</div>
          
## ⏳ Instalación

- El primer paso para iniciar el proyecto es dirigirte a la ruta backend usando `cd backend`.

- Instalar dependencias: `npm install`

- Iniciar la aplicación: `npm start` o `npm run dev` para iniciarla en modo developer
