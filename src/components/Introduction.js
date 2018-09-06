import React from 'react';

const Introduction = (props) => {
    const myIntro = (
        <div>
            {props.introduction.map((intro) =>
                <div className='item' key={intro.introductionTitle}>
                    <p>I am a recent graduate of The University of Central Florida, now based in Denver, Colorado. Focusing on Full-Stack Development and Digital Marketing, I stay competitive by keeping up to date with the latest technologies. I am a passionate coder and an avid learner. I enjoy hiking, trying out new foods, and spending time with my wife and dog. Recently I have been working on, and loving’ all things JavaScript, plus mobile user experience and design.</p>
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