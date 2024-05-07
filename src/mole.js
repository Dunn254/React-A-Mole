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
    const handleHoleClick = (event) => {
        // Check if the clicked hole has the mole image displayed
        if (event.target.style.backgroundImage.includes(moleImage)) {
          // Increase points by 1 if the mole was clicked
          setPoints(points + 1);
        }
        // Remove the mole image after click
        event.target.style.backgroundImage = '';
      };
      const handlePlay = () => {
        setPoints(0); // Reset points to 0
        setStopLoop(false); // Start the loop
        setPlayButtonVisible(false); // Hide the play button
      };const handlePlay = () => {
        setPoints(0); // Reset points to 0
        setStopLoop(false); // Start the loop
        setPlayButtonVisible(false); // Hide the play button
      };
      const handleStop = () => {
        setStopLoop(true); // Stop the loop
        setPlayButtonVisible(true); // Show the play button
      };
      return (
        <div>
          <h3 className='text-center mb-2'>points <span id='points'>{points}</span></h3>
          <div className="container bg-light p-6">
            <div className="row">
                {/* Render holes with event listeners */}
          <div className='col rounded bg-dark mb-4 p-6' id='hole1' onClick={handleHoleClick}></div>
          <div className='col rounded bg-dark mb-4 p-6' id='hole2' onClick={handleHoleClick}></div>
          <div className='col rounded bg-dark mb-4 p-6' id='hole3' onClick={handleHoleClick}></div>
        </div>
        <div className="row">
          <div className='col rounded bg-dark mb-4' id='hole4' onClick={handleHoleClick}></div>
          <div className='col rounded bg-dark mb-4' id='hole5' onClick={handleHoleClick}></div>
          <div className='col rounded bg-dark mb-4' id='hole6' onClick={handleHoleClick}></div>
        </div>
        <div className="row">
          <div className='col rounded bg-dark mb-4' id='hole7' onClick={handleHoleClick}></div>
          <div className='col rounded bg-dark mb-4' id='hole8' onClick={handleHoleClick}></div>
          <div className='col rounded bg-dark mb-4' id='hole9' onClick={handleHoleClick}></div>
        </div>
        <div className="row text-center">
          <div className='col rounded bg-light mb-4 p-6'>
            {playButtonVisible && <button type="button" id='play' className="btn btn-block btn-primary btn-sm" onClick={handlePlay}>Play</button>}
            {!playButtonVisible && <button type="button" id='stop' className="btn btn-block btn-danger btn-sm" onClick={handleStop}>Stop</button>}
          </div>
        </div>
        </div>
    </div>
  );
}

export default MoleContainer;