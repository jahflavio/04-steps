// Import useState hook from React to manage component state
import { useState } from 'react';

// Array of messages for each step in the tutorial
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

// Main App component
function Steps() {
  // State variable to track the current step (starts at 1)
  // Uses useState hook to initialize and manage the step state
  const [step, setStep] = useState(1);

  // State variable to track if the content is open/visible (starts as true)
  // Uses useState hook to initialize and manage the isOpen state
  const [isOpen, setIsOpen] = useState(true);

  // Function to handle moving to the previous step
  function handlePrevious() {
    // Only decrease step if it's greater than 1
    // Uses functional state update to ensure we're working with the latest state value
    // This prevents potential race conditions if multiple state updates happen rapidly
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  // Function to handle moving to the next step
  function handleNext() {
    // Only increase step if it's less than 3
    // Uses functional state update to ensure we're working with the latest state value
    // This prevents potential race conditions if multiple state updates happen rapidly
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  // JSX return statement renders the component UI
  return (
    <div>
      {/* Close button that toggles the visibility of the content */}
      {/* Uses functional state update to toggle the isOpen state */}
      {/* Functional update ensures we're working with the most recent state value */}
      <button
        className="close"
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
      >
        &times;
      </button>

      {/* Conditional rendering - only show content if isOpen is true */}
      {isOpen && (
        <div className="steps">
          {/* Visual indicators showing which steps are active */}
          <div className="numbers">
            {/* Each div represents a step number, with 'active' class applied if the current step is >= that number */}
            {/* These represent the visual progress indicators for the tutorial steps */}
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          {/* Display the current step number and corresponding message */}
          {/* Uses the current step value to determine which message to display */}
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/* Container for navigation buttons */}
          <div className="buttons">
            {/* Previous button - triggers handlePrevious function when clicked */}
            {/* Updates the step state by decrementing it (if step > 1) */}
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            {/* Next button - triggers handleNext function when clicked */}
            {/* Updates the step state by incrementing it (if step < 3) */}
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
