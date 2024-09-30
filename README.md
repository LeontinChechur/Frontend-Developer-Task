# Frontend Developer Task

This application consists of two main pages:

Page 1: Shows a table with mock data, including "names" and "fields". At the top, there is a search input allowing users to search for any row. A details section at the bottom of the page displays information from the selected row.

Page 2: Displays a timeline of the patient's medical history, emphasizing the total allowed amounts for each date. It includes links to detailed procedure codes and diagnostic information.

The Front end developer project contains the following files and directories:

```
.gitignore
README.md (already present)
index.html
package-lock.json
package.json
public (directory)
src (directory)
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

The current README.md file gives a simple overview of setting up a React project with TypeScript and Vite.

TO DO:

- add unit test coverage
- switch from Vertical\Horzintal in a click for Timeline

# React + TypeScript + Vite Project

This project is a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [NMP]() (optional but recommended)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/LeontinChechur/Frontend-Developer-Task.git
   ```
2. Install dependencies:

   ```
   npm install
   ```

### Running the Development Server

To start the development server with HMR:

```
npm run dev
```

Available Scripts
In the project directory, you can run the following scripts:

``npm run dev``
Runs the app in development mode with HMR.

``npm run build``
Builds the app for production to the dist folder.

``npm run preview``
Locally preview the production build.

## Project Structure

```plaintext
frontend-developer-task/
├── public/               # Public assets
├── src/                  # Source files
│   ├── assets/           # Assets such as images and styles
│   ├── components/       # React components
│   ├── pages/       	  # React pages
│   ├── shared/ 	  # Shared components
│	├── const/	  # Routes constants
│	├── data/	  # Mock data
│	├── helpers/	  # Helpers functions
│	├── interfaces/	  # All interfaces
│	├── layouts/	  # Main layout
│   ├── store/		  # Redux store with mock API
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point for the application
│   └── ...               # Other source files
├── .gitignore            # Git ignore file
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add some feature'`.
5. Push to the branch: `git push origin feature-branch`.
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
