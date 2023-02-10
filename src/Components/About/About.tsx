import * as React from 'react';
import { Contact } from '../Contact/Contact';

interface About {
}

export const About: React.FC<About> = () => {
    return (
        <section className='about'>
            <h1>A bit about me</h1>
            <h2>My name is Stephanie Melo and I’m an interactive media designer, passionate about creating unique experiences for user’s in this tech-savy world. I have done a little of everything when it comes to design but I’m mostly work in UX/UI Design and Fullstack Development with React. Being able to know the whole design process, from devising innovative solutions to actually putting them to the test with prototypes and later bringing them to life for a user is something that I love that I can do.</h2>
            <h2>I currently work on projects with React, AWS and prototyping with Figma. My day to day also includes learning new skills and concepts to keep up to date with the ever growing industry.</h2>
            <article>
                <svg width="300" height="500">
                    <rect className='rectangle' width="306" height="745" />
                </svg>

            </article>
            <article>
                <h1>Who am I?</h1>
                <ul>
                    <li>
                        <h3>Art mixed with my love for tech</h3>
                        <p></p>
                    </li>
                    <li>
                        <h3>Curious exploerer ready to learn</h3>
                        <p></p>
                    </li>
                    <li>
                        <h3>Baker at heart</h3>
                        <p>I love baking cookies,cakes,brownies and experimenting in the kitchen with new recipes. Sometimes it doesn't always come out as I had hoped for but I always keep my chin up and try again next time (Hopefully without burning my fingers )</p>
                    </li>
                </ul>
            </article>
            <footer className='contact'>
                <h3 className='contact__title'>Let's get in touch</h3>
                <Contact />



            </footer>
        </section>
    );
}