// Just one example
import React from 'react'
import './mole.css';

function MoleContainer(props){
    return (
        <div>
            <h2 className='text-center mb-2'> Mole Container </h2>
            <h3 className='text-center mb-2'>points <span id='points'>{props.points}</span></h3>
            <div className="container bg-light h-75">
                <div className="row mb-2">
                    <div className='col rounded bg-dark mb-4 p-6' id='hole1'></div>
                    <div className='col rounded bg-dark mb-4 p-6' id='hole2'></div>
                    <div className='col rounded bg-dark mb-4 p-6' id='hole3'></div>
                </div>
                <div className="row mb-2">
                    <div className='col rounded bg-dark mb-4' id='hole4'></div>
                    <div className='col rounded bg-dark mb-4' id='hole5'></div>
                    <div className='col rounded bg-dark mb-4' id='hole6'></div>
                </div>
                <div className="row mb-2">
                    <div className='col rounded bg-dark mb-4' id='hole7'></div>
                    <div className='col rounded bg-dark mb-4' id='hole8'></div>
                    <div className='col rounded bg-dark mb-4' id='hole9'></div>
                </div>
                <div className="row mb-2 text-center">
                    <div className='col rounded bg-light mb-4 p-6'>
                    <button type="button" id='play' className="btn btn-block btn-primary btn-lg" onClick={props.handlePlay}>Play</button>
                    </div>
                    <div className='col rounded bg-light mb-4 p-6'>
                    <button type="button" id='stop' className="btn btn-block btn-danger btn-lg" onClick={props.handleStop}>Stop</button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default MoleContainer;