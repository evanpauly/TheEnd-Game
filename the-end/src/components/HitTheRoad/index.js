import React from 'react';
import { Link } from 'react-router-dom';

function HitTheRoad() {
    return (
        <body className="">
            <div className="">
                <h3>
                    You decide to hit the road. Do you walk or drive?
                </h3>
                <br></br>
                <Link className='button' to={"/Walk"}><button className='button'></button>Walk</Link>
                <Link className='button' to={"/Drive"}><button className='button'></button>Drive</Link>
            </div>
        </body>
    );
}

export default HitTheRoad;