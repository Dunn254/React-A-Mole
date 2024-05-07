import React, { useState, useEffect } from 'react';
import './mole.css';
import moleImage from './mole.png'; // Import your mole image

function MoleContainer(props) {
  const [points, setPoints] = useState(0); // Initialize points state
  const [stopLoop, setStopLoop] = useState(true); // Track if the loop should be stopped
  const [playButtonVisible, setPlayButtonVisible] = useState(true); // Track if the play button should be visible

  useEffect(() => {
    let intervalId;

    // Function to generate and display mole image in a random hole
    const displayMole = () => {
      // Generate a random hole between 1 and 9
      const randomHole = Math.floor(Math.random() * 9) + 1;
      const selectedHole = document.getElementById(`hole${randomHole}`);

      // Display mole image within the selected hole
      selectedHole.style.backgroundImage = `url(${moleImage})`;
      // Set a timeout to remove the mole image after 700 milliseconds
      setTimeout(() => {
        selectedHole.style.backgroundImage = '';
      }, 700);
    };
    // Start the loop to continuously generate random holes
    const startLoop = () => {
        intervalId = setInterval(() => {
          if (!stopLoop) {
            displayMole();
          } else {
            clearInterval(intervalId); // Stop the loop if stopLoop is true
          }
        }, 700);
      };
      // Start the loop when the component mounts
    if (!stopLoop) {
        startLoop();
      }
  
      // Cleanup function to clear the interval when the component unmounts or stopLoop changes
      return () => clearInterval(intervalId);
    }, [stopLoop]); // Run effect whenever stopLoop changes