import React from 'react';
import { Link } from 'react-router-dom';

function Walk() {
    return (
        <body className="">
            <div className="">
                <h3>
                    You decide to start walking. After about 5 miles, you come upon a department store that looks like it hasn't been looted yet. Do you attempt to enter the store? Or continue walking?
                </h3>
                <br></br>
                <Link className='button' to={"/Enter"}><button className='button'></button>Enter Store</Link>
                <Link className='button' to={"/KeepWalking"}><button className='button'></button>Keep Walking</Link>
            </div>
        </body>
    );
}

export default Walk;