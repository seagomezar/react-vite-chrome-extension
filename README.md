## Minimalista OpenAI Chrome Extension Starter Usando React, Vite, TailwindCSS y OpenAI

Este es un proyecto de ejemplo para crear una extensión de Chrome minimalista utilizando React, Vite, TailwindCSS y OpenAI. 

**Características:**

* **React y Vite:** Se utiliza React para el desarrollo de la interfaz de usuario y Vite para el desarrollo rápido.
* **TailwindCSS:**  Se utiliza TailwindCSS para estilos rápidos y fáciles.
* **OpenAI:** Se utiliza la API de OpenAI para generar texto, traducir idiomas y mucho más.
* **CRXJS Vite Plugin:** Este plugin facilita el desarrollo de extensiones de Chrome.

**Instalación**

1. Reemplaza `.env.example` con `.env` e inserta tu clave de OpenAI como el valor para `VITE_Open_AI_Key`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

**Uso**

1. En la página de extensiones de Chrome (`chrome://extensions`), activa el modo de desarrollador.
2. Haz clic en "Cargar sin empaquetar" y selecciona la carpeta del proyecto.

**Archivos importantes:**

* **src/App.tsx:** Componente principal de la extensión.
* **src/utils/openai.ts:** Función para interactuar con la API de OpenAI.
* **src/manifest.json:** Archivo que define las características de la extensión.

**Personalización:**

* Puedes agregar más páginas a la extensión (popup, opciones, etc.) en la carpeta `src/pages`.
* Puedes personalizar la interfaz de usuario usando TailwindCSS.
* Puedes utilizar la API de OpenAI para agregar funcionalidad a la extensión.

**Consejos:**

* Para actualizar la extensión, simplemente reinicia el servidor de desarrollo o recarga la extensión en la página de extensiones de Chrome.
* Para empaquetar la extensión, ejecuta `npm run build` y luego carga el paquete en la página de extensiones de Chrome.

**Recursos:**

* [OpenAI API](https://platform.openai.com/docs/api-reference)
* [CRXJS Vite Plugin](https://crxjs.dev/vite-plugin/)
* [TailwindCSS](https://tailwindcss.com/)
* [React](https://reactjs.org/)

**Ejemplos:**

* **Generador de texto:** Puedes utilizar la API de OpenAI para generar texto a partir de una entrada de usuario.
* **Traductor:** Puedes utilizar la API de OpenAI para traducir texto entre idiomas.
* **Respuestas a preguntas:** Puedes utilizar la API de OpenAI para generar respuestas a preguntas de usuario.

¡Espero que este proyecto te ayude a crear tu propia extensión de Chrome utilizando React, Vite, TailwindCSS y OpenAI!