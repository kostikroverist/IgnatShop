## Ignat Sport Store Documentation

Welcome to the Ignat Sport Store project! Below is a brief overview of the project structure and its main components.

### Project Structure

The project structure follows a typical React application setup:

- `src/`: This directory contains all the source code for the application.
  - `components/`: Contains reusable UI components used throughout the application.
  - `layouts/`: Contains layout components that structure the overall page layout.
  - `pages/`: Contains individual page components that are rendered by React Router.
  - `styles/`: Contains SCSS files for styling the application.
- `public/`: Contains static assets such as images, fonts, and icons.

### Main Components

1. **React Router Dom:**
   - The project utilizes `react-router-dom` for client-side routing. This allows for navigation between different pages without a full page reload.

2. **Layout Component:**
   - A layout component has been implemented to provide a consistent structure across different pages of the application. This layout can be easily extended to accommodate future enhancements.

3. **Slider Component:**
   - The project features three working sliders implemented using the `Slider` library. These sliders provide interactive content presentation to users.

4. **Custom Button Component:**
   - A custom button component has been created, featuring default and dark themes. This button enhances the user interface and maintains consistency across the application.

5. **SCSS Styling:**
   - SCSS (Sass) is used for styling the application. SCSS files are organized within the `style/` directory and provide a modular and maintainable approach to styling.

### Getting Started

To get started with the Ignat Sport Store project:

1. Clone the repository:

   ```bash
   git clone https://github.com/kostikroverist/IgnatShop.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

5. Or you can navigate to `https://ignat-shop.netlify.app/` to view the application without installation.
