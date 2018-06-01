import React from 'react';

const Introduction = (props) => {
    const myIntro = (
        <div>
            {props.introduction.map((intro) =>
                <div className='item' key={intro.introductionTitle}>
                    <p> I am a freelance developer looking for a full-time position at a company with the opportunity for advancement. I've been in the tech field for a few years now, I enjoy a challenge and working with other people. I have the ability to adapt to my enviroment to become a key player quickly, as I don't like falling behind. This resume is made with React, a JavaScript Front-End User Interface Library. Like my resume? Well Thank You! Don't forget to grab the PDF/Google Document version.</p>
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