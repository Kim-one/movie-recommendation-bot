# Movie Recommendation Bot

A web application that allows users to browse, filter, and get recommendations for movies and TV shows. The app also features a chatbot for interactive movie suggestions and supports user authentication.

## Features

- Browse movies and TV shows by genre (Action & Adventure, Drama, Comedy, Crime, Sci-Fi & Fantasy, Romance, etc.)
- Filter results by release year and type (Movie or TV Show)
- Chatbot for personalized recommendations
- User authentication (login/register/logout)
- Responsive interface with navigation bar

## Technologies Used

- **Frontend:** React (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
- **Routing:** React Router
- **State Management:** React Hooks, Context API
- **Styling:** CSS
- **Backend Communication:** Fetch API (expects backend server at `http://localhost:5000`)

## Getting Started

### Prerequisites
- Backend server running at `http://localhost:5000` (for authentication and movie data)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Kim-one/movie-recommendation-bot.git
    cd movie-recommendation-bot
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

### Available Scripts

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects the app from Create React App (irreversible).

## Usage

- Use the navigation bar to browse Movies, TV Shows, or access the ChatBot.
- Filter movies by genre and year.
- Log in or register for personalized features.
- Chat with the bot for recommendations.

## Folder Structure

- `src/pages/` — Main page components (Home, Movies, TV Shows, ChatBot, Login, Register, Navbar, AuthContext)
- `src/styles/` — CSS files for styling components
- `public/` — Static assets and HTML template

## License

This project is open source.

## Author

[Kim-one](https://github.com/Kim-one)
