import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="">
            <div className="">
                <h3>
                    Welcome to The End. 
                    <br></br>
                    This is a post apocalyptic text based choose your own adventure game.
                    <br></br>
                    <br></br>
                    Press Start to begin.
                </h3>
                <br></br>
                <Link className='button' to={"/FirstQuestion"}><button className='button'></button>Start</Link>
            </div>
        </main>
    );
}

export default Home;