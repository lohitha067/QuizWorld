# QuizWorld

A modern, interactive quiz application built with React and Redux that fetches trivia questions from the Open Trivia Database API. Users can browse quiz categories, select their preferred topics, and take quizzes while tracking their scores.

## Project Overview

QuizWorld is a full-featured quiz platform that allows users to:
- Browse multiple quiz categories
- Select a category and start a quiz
- Answer multiple-choice trivia questions
- Track their score throughout the quiz
- Navigate between questions seamlessly

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **State Management**: Redux Toolkit 2.2.6 with React-Redux 9.1.2
- **Build Tool**: Vite 5.3.1
- **Styling**: Tailwind CSS 3.4.4 with PostCSS
- **Routing**: React Router DOM 6.24.1
- **UI Components**: React Icons 5.2.1 for icons, Epic Spinners for loading animations
- **Runtime**: Babel Runtime for JavaScript compatibility

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── category/        # Category browsing components
│   │   ├── Category.jsx         # Category page
│   │   └── CategoryCard.jsx     # Individual category card
│   └── navbar/          # Navigation components
│       └── Navbar.jsx           # Top navigation bar
├── features/            # Redux slices
│   ├── categorySlice.js         # Category state management
│   └── questionSlice.js         # Question state management
├── hooks/               # Custom React hooks
│   ├── getCategoryList.js       # Fetch categories from API
│   └── getQuestions.js          # Fetch questions from API
├── pages/               # Page-level components
│   └── Quiz.jsx                 # Quiz page with question display
├── store/               # Redux store configuration
│   └── store.js                 # Store setup
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Key Features

- **Dynamic Category Loading**: Fetches quiz categories from Open Trivia Database API
- **Redux State Management**: Centralized state for categories and questions
- **Quiz Interface**: 10-question quizzes with multiple-choice answers
- **Score Tracking**: Real-time score calculation during the quiz
- **Responsive Design**: Tailwind CSS for a modern, responsive UI
- **Loading States**: Epic Spinners for smooth loading animations
- **Client-Side Routing**: React Router for seamless navigation between pages

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## API Integration

This project uses the [Open Trivia Database API](https://opentdb.com/) to:
- Fetch available quiz categories
- Retrieve trivia questions with multiple-choice answers

## State Management

The Redux store manages two main slices:
- **Category Slice**: Stores available quiz categories
- **Question Slice**: Stores questions for the current quiz session

## Future Enhancements

- Difficulty level selection
- Question type variety
- Leaderboard/high scores
- User authentication
- Quiz history and analytics
- Customizable quiz length
