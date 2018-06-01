import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Introduction from './components/Introduction';



class App extends Component {
  render() {

    const person = {
      avatar: 'https://avatars0.githubusercontent.com/u/30301877?s=460&v=4',
      name: 'Christopher Bermudez',
      profession: 'Certified Full-Stack Developer and Digital Marketing Specialist',
      bio: 'Specializing in UI/UX - Freelance Developer, Focus on E-Commerce.',
      address: 'Willing to Relocate',
      social: [
        {name: 'github', url: 'https://github.com/chrisobo98'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/christopher-bermudez-6b578b129/'},

      ],
      introduction: [
        {introductionTitle: 'My Introduction'}
      ],
      projects: [
        {projectTitle: 'Date Knight', projectType: 'Web App', projectDescription: 'Date planner application using API’s to show nearby events after a user submits their zip code, and pulls up nearby restaurants when an event is clicked', projectLink: 'https://ascoonj.github.io/ItsADate-GroupProject/results.html'},
        {projectTitle: 'Room Me', projectType: 'Web App', projectDescription: 'Quiz application matching you with a roommate to avoid potential roommate horror stories.', projectLink: 'https://frozen-savannah-91005.herokuapp.com/'},
        {projectTitle: 'Build-a-PC Workshop', projectType: 'React App', projectDescription: 'Newegg like PC component and pre-builds store application on React.', projectLink: 'https://github.com/chrisobo98/build-a-pc-workshop'}
      ],
      education: [
        {degree: 'Coding Bootcamp', institution: 'University of Central Florida', startDate: 'Oct 2017', endDate: 'April 2018', description: 'Proud Graduate. This was a fast-paced, immersive curriculum, learned the skills needed to become proficient in front-end and back-end technologies.'},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],
      skills: [
        {name: 'React', percentage: '100%'},
        {name: 'CSS', percentage: '100%'},
        {name: 'Git', percentage: '100%'},
        {name: 'SEO', percentage: '100%'},
        {name: "Digital Marketing", percentage: '100%'},
        {name: 'Google Ads', percentage: '90%'},
        {name: 'Analytics', percentage: '90%'},
        {name: "Adobe", percentage: '80%'},
        {name: "E-Commerce", percentage: '90%'},
        {name: "Magento + Wordpress", percentage: '90%'},

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
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
