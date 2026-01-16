// Import useState hook from React to manage component state
import { useState } from 'react';

// Array of messages for each step in the tutorial
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

// Main App component
export default function App() {
  // State variable to track the current step (starts at 1)
  const [step, setStep] = useState(1);

  // State variable to track if the content is open/visible (starts as true)
  const [isOpen, setIsOpen] = useState(true);

  // Function to handle moving to the previous step
  function handlePrevious() {
    // Only decrease step if it's greater than 1
    if (step > 1) setStep(step - 1);
  }

  // Function to handle moving to the next step
  function handleNext() {
    // Only increase step if it's less than 3
    if (step < 3) setStep(step + 1);
  }

  // JSX return statement renders the component UI
  return (
    <>
      {/* Close button that toggles the visibility of the content */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {/* Conditional rendering - only show content if isOpen is true */}
      {isOpen && (
        <div className="steps">
          {/* Visual indicators showing which steps are active */}
          <div className="numbers">
            {/* Each div represents a step number, with 'active' class applied if the current step is >= that number */}
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          {/* Display the current step number and corresponding message */}
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/* Container for navigation buttons */}
          <div className="buttons">
            {/* Previous button - triggers handlePrevious function when clicked */}
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            {/* Next button - triggers handleNext function when clicked */}
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
