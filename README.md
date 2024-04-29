<h1 align="center">📝 Agenda de Citas 📝</h1>

<h2 align="center"> Llevá un registro de tus citas médicas de la manera más sencilla! </h1>

## 🔔 Descripción del Proyecto

- ¡Bienvenido a la Agenda de Citas! El proyecto consiste en crear un backend que pueda ser utilizado en una web destinada a una agenda de citas. Pretende que se pueda llevar un registro de los pacientes, médicos y citas establecidas entre los mismos en una clínica médica.

- Cada cita establecida entre un paciente y un médico determinado, puede ser abonada de forma online mediante el uso de Mercado Pago (MP). Se puede modificar el horario de las mismas y cambiar su estado (cancelada/abonada).

- Además, luego de que la cita se concrete, la aplicación permite devolver un feedback que detalle la misma.

## 📊 Requerimientos:

GESTIÓN USUARIOS / PACIENTES
◍ Registro de usuarios
◍ Login de usuarios
◍ Obtener listado de pacientes
◍ Obtener un paciente
◍ Editar perfil del paciente
◍ Eliminar un paciente
◍ Historial de citas del usuario

GESTIÓN MEDICOS
◍ Crear médicos
◍ Obtener listado de médicos
◍ Obtener un médico
◍ Eliminar un médico
◍ Historial de citas del médico

GESTIÓN CITAS
◍ Crear citas (fecha, hora, profesional)
◍ Obtener citas
◍ Obtener una cita
◍ Cancelar citas
o Pago de citas online (MP)
o Modificar el horario de las citas
o Feedback de la cita.

AUTENTICACIÓN
◍ Por medio de Passport implementar, aunque sea 1 autenticación vista en el curso (Local, Github, Google)

PRUEBAS
o Testear con jest para validar que cada unidad de codigo del sisema funciona correctamente.

REPO GITHUB
◍ Hacer un readme copado.

DOCUMENTACIÓN
◍ Probar todos los endpoints y guardar las pruebas funcionando en una carpeta de Postman.

## 🌀 Tecnologías Utilizadas

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    <i class="devicon-nodejs-plain-wordmark colored"></i>
    <i class="devicon-postman-plain colored"></i>
    <i class="devicon-mongodb-plain-wordmark colored"></i>
    <i class="devicon-mongoose-original-wordmark colored"></i>
    <i class="devicon-express-original-wordmark colored"></i>    
         
<link />

<svg viewBox="0 0 128 128">
    <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
</svg>


<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" />
          

## ⏳ Instalación

- El primer paso para iniciar el proyecto es dirigirte a la ruta backend usando `cd backend`.

- Instalar dependencias: `npm install`

- Iniciar la aplicación: `npm start` o `npm run dev` para iniciarla en modo developer
