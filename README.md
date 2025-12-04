 ## 🌟 Curious Facts SPA

> Una Single Page Application (SPA) dinámica que consume la API de "Useless Facts" para ofrecer datos curiosos aleatorios y gestionar una lista de favoritos.

 ## 📖 Contexto del Proyecto

La empresa **Useless Facts** solicitó el desarrollo front-end de una aplicación web moderna. El objetivo principal era crear una interfaz intuitiva donde los usuarios pudieran descubrir hechos aleatorios y guardar aquellos que les resultaran más interesantes, todo ello sin recargar la página.

## ✨ Características (Requisitos Funcionales)

La aplicación cumple con los siguientes requisitos:

*   **🔍 Descubrimiento:** Llama a la API externa para obtener un hecho curioso de manera individual.
*   **👁️ Visualización Única:** Muestra el hecho actual y lo reemplaza automáticamente al solicitar uno nuevo.
*   **❤️ Gestión de Favoritos:** Permite guardar hechos en una lista local.
    *   *Validación:* Evita que se guarden hechos duplicados.
    *   *Persistencia:* Gestión de estado mediante array en memoria.
*   **🗑️ Eliminación:** Permite eliminar hechos individuales de la lista de favoritos.
*   **📱 SPA & Responsive:** Navegación fluida en una sola página HTML, diseñada con enfoque **Mobile First** y adaptable a escritorio (Desktop).

## 🛠️ Stack Tecnológico

*   **Lenguajes:** HTML5, CSS3, JavaScript (ES6 Modules).
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (CDN) para un diseño rápido y responsive.
*   **Testing:** [Vitest](https://vitest.dev/) para pruebas unitarias.
*   **Herramientas de Gestión:** Git, GitHub (Gitflow), Trello (Kanban), Figma (Diseño UI), Draw.io.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y de Atomic Design:


/
├── assets/                # imágenes y recursos
├── css/
│   └── style.css          # Estilos personalizados y resets
├── js/
│   ├── index.js           # Punto de entrada y orquestador de eventos
│   ├── fact-button.js     # Lógica de llamada a la API (Fetch)
│   ├── fav-button.js      # Lógica de negocio para añadir favoritos
│   └── fav-array.js       # Estado: Almacenamiento de datos (Array)
├── tests/                 # Pruebas unitarias con Vitest
├── index.html             # Único punto de entrada HTML (SPA)
├── package.json           # Dependencias (Vitest)
└── README.md              # Documentación del proyecto

## 🚀 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/curious-facts.git](https://github.com/tu-usuario/curious-facts.git)
    cd curious-facts
    
2.  **Instalar dependencias (para los tests):**
    ```bash
    npm install
    
3.  **Ejecutar la aplicación:**
    *   Simplemente abre el archivo `index.html` en tu navegador.
    *   Recomendado: Usar la extensión "Live Server" de VS Code.

4.  **Ejecutar los tests:**
    ```bash
    npm run test
    
## 🧪 Testing

Se han implementado tests unitarios utilizando **Vitest** para asegurar la calidad del código, centrándose en la lógica crítica de negocio:

*   **Validación de Favoritos:** Se testea que la función `addFavs` añada correctamente elementos al array.
*   **Control de Duplicados:** Se verifica que el sistema devuelva un error y no duplique datos si el usuario intenta guardar el mismo hecho dos veces.
*   **Validación del funcionamiento de la APi:** Se testea que la función `newFact` devuelva un String en el caso de contactar con la API, o un mensaje avisando que no ha hay nuevo fact.

## 👥 Metodología

El proyecto se desarrolló en un sprint individual utilizando metodologías ágiles:
*   Uso de **Conventional Commits** para el historial de versiones.
*   Flujo de trabajo **Gitflow** (ramas `main`, `dev`, `feature_xxx`).
*   Seguimiento de tareas mediante tablero Kanban en Trello.

