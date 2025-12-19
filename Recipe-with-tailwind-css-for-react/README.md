# Recipe Card with Tailwind CSS

A beautiful recipe card component built with React and Tailwind CSS, featuring a modern design with gradient backgrounds and responsive layout.

## Features

- 🎨 Beautiful gradient background (orange to red)
- 📱 Responsive design
- 🖼️ Dynamic food images from Unsplash
- ✨ Modern card layout with shadows
- 🎯 Centered typography
- 🔘 Interactive hover effects

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.jsx          # Main recipe card component
├── main.jsx         # React entry point
├── index.css        # Global styles with Tailwind directives
└── assets/          # Static assets
```

## Tailwind Configuration

The project uses Tailwind CSS v4 with PostCSS integration. Configuration files:

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration with Tailwind plugin

## Recipe Card Component

The main component displays:
- Food image from Unsplash API
- Recipe title (Spaghetti Bolognese)
- Description
- Ingredient list
- Call-to-action button

## Customization

You can easily customize the recipe card by modifying the `App.jsx` file:
- Change the recipe title and description
- Update the ingredient list
- Modify colors using Tailwind classes
- Add more recipe cards

## License

This project is open source and available under the MIT License.