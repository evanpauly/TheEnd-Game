import React from 'react';
import { Link } from 'react-router-dom';

function Drive() {
    return (
        <body className="">
            <div className="">
                <h3>
                    You decide to start driving. You have traveled for about 50 miles before you come upon someone trying to flag you down in the middle of the road. Do you stop to help? Or continue driving?
                </h3>
                <br></br>
                <Link className='button' to={"/Stop"}><button className='button'></button>Stop</Link>
                <Link className='button' to={"/Continue"}><button className='button'></button>Keep Driving</Link>
            </div>
        </body>
    );
}

export default Drive;