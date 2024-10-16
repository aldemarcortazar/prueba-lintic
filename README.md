
# **Ecommerce Aldemar**

Una breve descripción de lo que hace tu aplicación. Por ejemplo:

> **Ecommerce Aldemar** es una plataforma de gestión de productos y órdenes que permite crear, editar y visualizar productos, además de gestionar pedidos, con un frontend desarrollado en SvelteKit y un backend en Node.js.

---

## **Tabla de Contenidos**
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
  - [Clonar el repositorio](#clonar-el-repositorio)
  - [Instalación del Backend](#instalación-del-backend)
  - [Instalación del Frontend](#instalación-del-frontend)
- [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
  - [Ejecución del Backend](#ejecución-del-backend)
  - [Ejecución del Frontend](#ejecución-del-frontend)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## **Características**
- **Gestión de productos:** Crear, editar y visualizar productos.
- **Gestión de órdenes:** Manejo de pedidos de productos.
- **Interfaz amigable:** Diseñada con SvelteKit y Tailwind CSS.
- **Backend robusto:** Implementado con Node.js y Express para gestionar la API de productos y órdenes.
- **SSR (Server-Side Rendering):** El frontend está preparado para renderización del lado del servidor.

---

## **Requisitos Previos**
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:
- **Node.js** (versión 14.x o superior)
- **npm** o **yarn** como gestor de paquetes
- **Git** para clonar el repositorio

---

## **Instalación**

### **Clonar el repositorio**
Primero, clona el repositorio desde GitHub:

\`\`\`bash
git clone https://github.com/usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
\`\`\`

### **Instalación del Backend**
1. Dirígete a la carpeta \`backend\`:
   \`\`\`bash
   cd backend
   \`\`\`
2. Instala las dependencias con **npm** o **yarn**:
   \`\`\`bash
   npm install
   \`\`\`

### **Instalación del Frontend**
1. Dirígete a la carpeta \`frontend\`:
   \`\`\`bash
   cd frontend
   \`\`\`
2. Instala las dependencias con **npm** o **yarn**:
   \`\`\`bash
   npm install
   \`\`\`
3. Configura las variables de entorno creando un archivo \`.env\` en la carpeta \`frontend\`. Usa el archivo \`.env.example\` como guía:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
4. Llena los campos necesarios en el archivo \`.env\` copea y pega del archivo \`.env.example\`

## **Ejecución de la Aplicación**

### **Ejecución del Backend**
1. Asegúrate de estar en la carpeta \`backend\`:
   \`\`\`bash
   cd backend
   \`\`\`
2. Ejecuta el servidor:
   \`\`\`bash
   npm run dev
   \`\`\`
3. El servidor del backend estará disponible en \`http://localhost:3000\`.

### **Ejecución del Frontend**
1. Asegúrate de estar en la carpeta \`frontend\`:
   \`\`\`bash
   cd frontend
   \`\`\`
2. Inicia el servidor de desarrollo de SvelteKit:
   \`\`\`bash
   npm run dev
   \`\`\`
3. Abre tu navegador y ve a \`http://localhost:5173\` para ver la aplicación en funcionamiento.

---

## **Tecnologías Usadas**
### **Frontend**
- [SvelteKit](https://kit.svelte.dev/) - Framework para construir aplicaciones web rápidas y optimizadas.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para diseño basado en utilidades.
- [Vite](https://vitejs.dev/) - Herramienta de desarrollo para proyectos web modernos.

### **Backend**
- [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript del lado del servidor.
- [Express.js](https://expressjs.com/) - Framework para construir APIs en Node.js.
- [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL (si aplica).

---

## **Contribución**
Si quieres contribuir al proyecto, sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu feature o corrección de bug (\`git checkout -b feature/nueva-feature\`).
3. Realiza los cambios necesarios y haz commit (\`git commit -m 'Agrega una nueva feature'\`).
4. Haz push a la rama (\`git push origin feature/nueva-feature\`).
5. Crea un Pull Request.

---

## **Licencia**
Este proyecto está bajo la Licencia MIT. Consulta el archivo \`LICENSE\` para más información.
