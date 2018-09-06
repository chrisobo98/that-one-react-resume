import React from 'react';

  const Experience = (props) => {
    const myExperience = (
      <div>
        {props.experience.map((exp) =>
          <div className='item' key={exp.experienceArray}>
            <h3>{exp.title} <br></br>{exp.company} <br></br><span>{exp.startDate} - {exp.endDate}</span></h3>

            <p></p>
          </div>
        )}   
      </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>EXPERIENCE</h2>
      {myExperience}
    </div>
  )
};

export default Experience;
