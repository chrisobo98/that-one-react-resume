import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

const About = ({avatar, name, profession, bio, address, social}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p className="willingToRelocate">{address}</p>
      </div>
      <div className='address'>
        <p className="willingToRelocate">christopherbermudez98@gmail.com</p>
      </div>
      <Social social={social} />
      <div style={{paddingTop: 20}} className='pdf'>
        <button className="button"><a href="https://docs.google.com/document/d/1oxeQ847LhWEeBbzOS6NX9E1rsP1a-zDTrm3V68ENG4Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Click for Google Doc</a></button>
      </div>
    </div>
  );
};

About.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  social: PropTypes.node
};

export default About;
