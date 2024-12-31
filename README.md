# Node + Express + Vite + React + TypeScript Starter

This is a starter template for building a full-stack web application using **Node.js**, **Express**, **Vite**, **React**, and **TypeScript**. The project is structured to run both in a local development environment and in Docker.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Development Setup](#development-setup)
  - [Running with Docker](#running-with-docker)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Prerequisites

- **Node.js** (Recommended version: 16+)
- **Yarn** (Package manager)
- **Docker** (Optional, for containerized environment)

## Installation

### 1. Clone the repository

```bash
git clone https://your-repo-url.git
cd your-project-directory
```

### 2. Install dependencies

#### Backend (Node + Express)
In the root of the project, run the following command to install the backend dependencies:

```bash
yarn install
```

#### Frontend (Vite + React)
Next, navigate to the `frontend` directory and install the frontend dependencies:

```bash
cd frontend
yarn install
```

### Development Setup

After installing the dependencies, you can run the application in development mode.

#### Backend (Node + Express)

To start the backend server:

```bash
yarn dev
```

This will start the backend server on the default port (usually `3000`).

#### Frontend (Vite + React)

To start the Vite-powered React frontend:

```bash
cd frontend
yarn dev
```

This will start the frontend development server, usually available at `http://localhost:5173`.

### Running with Docker

You can also run the application inside a Docker container. This is useful for creating a consistent development environment across different machines.

#### Build the Docker image

First, build the Docker image:

```bash
docker build -t node-express-vite-react-typescript-starter .
```

#### Run the Docker container

After the image is built, run the container with:

```bash
docker run -p 3000:3000 node-express-vite-react-typescript-starter
```

This will expose the backend server at `http://localhost:3000`. The frontend will automatically be available as well.

## Usage

Once both the backend and frontend are running in development mode, you can access the following:

- **Backend API**: `http://localhost:3000`
- **Frontend UI**: `http://localhost:5173` (or the port Vite is running on)

You can modify the source code in the backend and frontend directories, and the changes will be reflected in real-time with hot-reloading.

## Project Structure

```
└── 📁backend
    └── 📁modules
        └── 📁sampleModule
            └── 📁controllers
                └── sampleController.ts
            └── 📁routes
                └── sampleRouter.ts
    └── 📁startup
        └── init.ts
        └── router.ts
        └── security.ts
    └── .env
    └── app.ts
└── 📁frontend
    └── 📁public
        └── vite.svg
    └── 📁src
        └── App.css
        └── App.tsx
        └── 📁assets
            └── react.svg
        └── index.css
        └── main.tsx
        └── vite-env.d.ts
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package.json
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
    └── yarn.lock
└── .gitignore
└── .prettierrc.json
└── eslint.config.mjs
└── nodemon.json
└── package.json
└── tsconfig.json
└── yarn.lock
```

## Contributing

Feel free to fork this repo and submit pull requests. Issues and feature requests can be opened via GitHub Issues.

---

Happy coding! 🎉
```

### Notes:
1. **Docker**: The Docker section assumes that your Dockerfile is correctly set up to handle both the backend and frontend. Make sure your Dockerfile exposes the correct ports and is configured to run both services (Node + Express backend and Vite React frontend).
   
2. **Ports**: In the default setup, the backend runs on `http://localhost:3000` and the frontend on `http://localhost:5173`. These might need to be adjusted based on your configuration, so feel free to change them in the `README.md`.

3. **Customization**: Depending on any other configuration in your project (e.g., environment variables, or specific instructions related to TypeScript compilation), you might want to update the README with those details.

Let me know if you need any further adjustments or additional details!