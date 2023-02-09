import * as React from 'react';
import {
    Link,
} from "react-router-dom";

interface Link {
}

export const Links: React.FC<Link> = () => {
    return (

        // <ul className="list">
        //     <li>
        //         <Link className="elem" to="/">Home</Link>
        //     </li>
        //     <li>
        //         <Link className="elem" to="/about">About</Link>
        //     </li>
        //     <li>
        //         <Link className="elem" to="/design">Design</Link>
        //     </li>
        //     <li>
        //         <Link className="elem" to="/artwork">Artwork</Link>
        //     </li>

        // </ul>
        <ul className="list">
            <li className="item item--1" >
                <a className='item--1--link' href={`/`}>Home</a>
                <svg className='item--1--line' width="55" height="4" viewBox="0 0 55 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="55" y1="2" x2="-1.74846e-07" y2="2" stroke="#B8BBFF" stroke-width="4" />
                </svg>

            </li>
            <li className="item item--2">
                <a href={`/about`}>About</a>
                <svg className='item--2--line' width="63" height="4" viewBox="0 0 63 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="63" y1="2" y2="2" stroke="#C3EEEC" stroke-width="4" />
                </svg>
            </li>
            <li className="item item--3">
                <a href={`/design`}>Design</a>
                <svg className='item--3--line' width="70" height="4" viewBox="0 0 70 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="70" y1="2" y2="2" stroke="#FFD698" stroke-width="4" />
                </svg>

            </li>
            <li className="item item--4">
                <a href={`/artwork`}>Artwork</a>
                <svg className='item--4--line' width="79" height="4" viewBox="0 0 79 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="79" y1="2" y2="2" stroke="#FFA794" stroke-width="4" />
                </svg>

            </li>

        </ul>



    );
}


export default Links;