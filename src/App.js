import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Introduction from './components/Introduction';



class App extends Component {
  render() {

    const person = {
      avatar: 'https://avatars0.githubusercontent.com/u/30301877?s=460&v=4',
      name: 'Christopher Bermudez',
      profession: 'Full-Stack Developer',
      bio: 'Specializing in UI/UX - Freelance Developer, CSS Lover, Geek & Gamer.',
      address: 'Willing to Relocate',
      social: [
        {name: 'github', url: 'https://github.com/chrisobo98'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/christopher-bermudez-6b578b129/'}
      ],
      introduction: [
        {introductionTitle: 'My Introduction'}
      ],
      projects: [
        {projectTitle: 'Date Knight', projectType: 'Web App', projectDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {projectTitle: 'Room Me', projectType: 'Web App', projectDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {projectTitle: 'Build-a-PC Workshop', projectType: 'React App', projectDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'}
      ],
      education: [
        {degree: 'Coding Bootcamp', institution: 'University of Central Florida', startDate: 'Oct 2017', endDate: 'April 2018', description: 'Fast-paced, immersive curriculum, learned the skills needed to become proficient in front-end and back-end technologies.'},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],
      skills: [
        {name: 'React', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'Git', percentage: '90%'},
        {name: 'ES6', percentage: '75%'},
        {name: 'MongoDB', percentage: '70%'},
        {name: "REST API's", percentage: '70%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Introduction introduction={person.introduction} />
                <Education education={person.education} />
                <Skills skills={person.skills} />
                <Experience experience={person.experience} />
                <Projects projects={person.projects} />
                <Certificate certificate={person.certificate} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
