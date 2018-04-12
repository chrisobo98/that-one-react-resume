import React from 'react';

const Introduction = (props) => {
    const myIntro = (
        <div>
            {props.introduction.map((intro) =>
                <div className='item' key={intro.introductionTitle}>
                    <p> I am a freelance developer looking for a full-time position at a company with the opportunity for advancement. I have been working in web development for almost two years now. 
                        I got into it after running across a freelancing job, managing a WordPress site for a local restaurant called <a href="http://www.elcerro.net/" target="_blank" rel="noopener noreferrer">El Cerro</a>. I had no idea how to use WordPress or how websites worked, but not knowing how to do something never stopped me. 
                        I went on to build the site and it was a hit with the customers, it made it easier for them to find us, and see the menu. Even though my work was complete, 
                        I was not satisfied. <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;The WordPress platform did not let me modify the site how I wanted to, and the perfectionist in me didn't let me sleep knowing it wasn't as aesthetically pleasing as I wanted it to be. I went on to delve deeper into the word of web development, 
                        finding ways to customize sites how I wanted to, as opposed to being contained by the scarcity of options provided by themes. I started finding information on HTML5, and websites like W3Schools, Treehouse, freeCodeCamp, Codeacademy and more. 
                        <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;After discovering this newfound skill I spent countless hours learning web development. I decided to take it a step further by quitting my day job and enrolling in the UCF Coding Bootcamp, arming myself with the skills to jump right into the developer workforce. 
                        I now solely focus and rely on my developer skills, growing and learning something new every day. This is my resume, thanks for checking it out! Don't forget to grab the google document version of the resume, it might be easier to read and has links to some of my works.</p>
                </div>
            )}
        </div>
    );
    return (
        <div className='title'>
            <i className='fa fa-rocket'></i>
            <h2>INTRODUCTION</h2>
            {myIntro}
        </div>
    )
};

export default Introduction;