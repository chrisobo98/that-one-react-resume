import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';

  const Experience = (props) => {
    const myExperience = (
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - present"
              iconStyle={{ background: 'rgb(34,139,34)', color: '#228B22' }}
            >
              <h3 className="vertical-timeline-element-title">El Cerro Restaurant</h3>
              <h4 className="vertical-timeline-element-subtitle">Clermont, FL</h4>
              <p>
                Web Developer, Graphic Designer, Social Media and Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018"
              iconStyle={{ background: 'rgb(34,139,34)', color: '#228B22' }}
            >
              <h3 className="vertical-timeline-element-title">Full Sail University</h3>
              <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
              <p>
                App Developer
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
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
