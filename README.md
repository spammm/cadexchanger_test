# CAD Exchanger Test Project

This repository contains a React application developed as a test project for CAD Exchanger.

## Table of Contents

- [Project Setup Instructions](#project-setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
  - [Previewing the Production Build](#previewing-the-production-build)
  - [Linting](#linting)
  - [Hosting the site](#hosting-the-site)
- [Styling, SEO, and Performance Strategies Used](#styling-seo-and-performance-strategies-used)
  - [Styling](#styling)
  - [SEO](#seo)
  - [Performance](#performance)
- [Technologies Used](#technologies-used)

## Project Setup Instructions

### Prerequisites

- **Node.js** version **18.x.x** is required. Ensure you have Node.js installed on your machine. You can download it from the [official Node.js website](https://nodejs.org/en/download/).

### Installation

1. **Clone the repository:**
   ```bash
       git clone https://github.com/yourusername/cadexchanger_test.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd cadexchanger_test
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The production-ready files will be output to the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the content of the `dist` directory at `http://localhost:4173`

### Linting

To run the linter and check for code style issues:

```bash
npm run lint
```

### Hosting the site

#### The most affordable way

The simplest way to deploy the site on a ready-made hosting:
Open the `.env` file in the root folder of the application
Set your site's domain on the hosting: `VITE_APP_URL=http://yourwebsite.com`
Run the build:

```bash
npm run build
```

Copy the contents of the `dist` folder to the deployment directory on your hosting, usually this is `/var/www/yourwebsite.com`

#### Automatic Deploy

Some Hostings offer an automated depoloy process, such as [Netlify](https://app.netlify.com/). Everything you need to add your site to the repository, such as [github.com](https://github.com), register for hosting and follow the instructions

## Styling, SEO, and Performance Strategies Used

![alt-text](https://api.tehpulse.ru/uploads/images/b8c818c7-6103-4445-ab5a-d2f3be98d838.webp 'Light House Test')

### Styling

- **Material-UI (MUI) v6**: Leveraged for a consistent and responsive UI component library adhering to Material Design principles.
- **Styled Components**: Employed for writing CSS-in-JS styles, allowing for dynamic styling and theming.

### SEO

- **Meta Tags**: Included essential meta tags (title, description, viewport) for better SEO and responsiveness.
- **Open Graph Protocol**: Implemented Open Graph meta tags to enhance link previews when the site is shared on social media platforms like Facebook and LinkedIn.
- **Twitter Cards**: Added Twitter Card meta tags to control how the page is displayed when shared on Twitter.

### Performance

- **Vite**: Utilized Vite for its fast development server and optimized build process, resulting in quicker load times and improved developer experience.
- **React Lite YouTube Embed**: For YouTube video, uploads video only by click, shows easy picture in preview

### Technologies Used

- React: ^18.3.1
- Vite: ^5.4.10
- TypeScript: ~5.6.2
- Material-UI (MUI): ^6.1.6
- React Router DOM: ^6.27.0
- React Hook Form: ^7.53.1
- Styled Components: ^6.1.13
- React Lite YouTube Embed: ^2.4.0

## How to Use

Navigation: The application has two main pages accessible via React Router DOM.

- Home Page: Accessible at `/`.
- Contact Us Page: Accessible at `/contact-us`.
- Forms: The contact form utilizes react-hook-form for efficient form state management and validation.
