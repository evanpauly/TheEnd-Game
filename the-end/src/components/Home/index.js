import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <body className="">
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
                <button>Start</button>
                <>
                <Link className="" to="/FirstQuestion">Start</Link>
                </>
            </div>
        </body>
    );
}

export default Home;