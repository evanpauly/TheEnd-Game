import React from 'react';
import { Link } from 'react-router-dom';

function FirstQuestion() {
    return (
        <body className="">
            <div className="">
                <h3>
                    The world has just been turned into a free for all due to nuclear war. Where you currently live was not directly effected, but nothing is what it used to be. No more internet service, no more police, no more stores. If you stay, you can utilize all of your supplies and facilities and continue to scavenge your area. If you leave, you can head West and look for a property fit for homesteading. You need to decide if you're staying home for now or leaving for a safer place.
                </h3>
                <br></br>
                <Link className='button' to={"/StayHome"}><button className='button'></button>Stay Home</Link>
                <Link className='button' to={"/HitTheRoad"}><button className='button'></button>Hit The Road</Link>
            </div>
        </body>
    );
}

export default FirstQuestion;