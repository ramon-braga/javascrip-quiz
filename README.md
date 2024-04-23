# JavaScript Quiz Application

This project creates a quiz application in JavaScript. It contains several components and data structures that work together to display a quiz, collect answers, calculate the user's score, and display the result.

## Types

### Question

This type defines the structure of a question in the quiz.

- **Properties**:
    - `question`: The text of the question.
    - `options`: An array of possible answers for the question.
    - `answer`: The index of the correct answer in the options array.

## Components

### QuestionItem

Represents a single quiz question.

- **Props**:
    - `question`: The current question to be displayed.
    - `count`: The index of the current question in the quiz.
    - `onAnswer`: Callback function to handle answer selection.

- **Functionality**:
    - Displays the question and the options.
    - Handles answer selection and calls the `onAnswer` function with the selected answer index.

### Result

Displays the quiz result.

- **Props**:
    - `answers`: An array of user-selected answers.
    - `correct`: The count of correct answers.

- **Functionality**:
    - Calculates and displays the user's score as a percentage.

## Main Page (Page)

This is the main component of the application.

- **Functionality**:
    - Manages the state of the quiz, including the current question, answers, and quiz result.
    - Handles navigation between questions and calculates the score.
    - Provides a restart button to restart the quiz.

- **State Variables**:
    - `currentQuestion`: Index of the current question being displayed.
    - `answers`: Array of user-selected answers.
    - `showResult`: A boolean indicating whether the quiz result should be displayed.
    - `countCorrectAnswers`: Count of correct answers.

- **Functions**:
    - `loadNextQuestion`: Increments the current question index to navigate to the next question.
    - `handleAnswered`: Handles the user's answer and navigates to the next question.
    - `handleClickButton`: Resets the quiz state when the restart button is clicked.

- **Components Used**:
    - Uses the `QuestionItem` component to display a question.
    - Uses the `Result` component to display the quiz result.

- **Rendering**:
    - Displays questions or results based on the current state of the application.
    - Provides a restart button when the quiz result is displayed.

## Notes

- The code uses React for component-based UI rendering and state management.
- The quiz data is stored in an array of questions, each represented by the `Question` type.
- The main page manages the state of the quiz and uses components to display questions and results.