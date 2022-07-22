import React from 'react';
import { Link } from 'react-router-dom';

function StayHome() {
    return (
        <body className="">
            <div className="">
                <h3>
                    You decide to stay home. You only had enough food and water for 1 month. This is your last week of food and water. Do you want to scavenge for supplies? Or leave and find a new home base?
                </h3>
                <br></br>
                <Link className='button' to={"/Scavenge"}><button className='button'></button>Scavenge</Link>
                <Link className='button' to={"/Leave"}><button className='button'></button>Leave</Link>
            </div>
        </body>
    );
}

export default StayHome;