import { useState, useEffect } from 'react';
import Card from './Card';
import Tabs from './Tabs';
import './MainSection.css';

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? 'light-theme' : 'dark-theme';
  }, [isDarkTheme]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('reveal');
      }, index * 100);
    });
  }, [activeTab]);

  const renderCard = (CardContent, key, extraClass = '', title = '') => (
    <Card className={extraClass} key={key} title={title}>
      {CardContent}
    </Card>
  );
  
  const renderCards = () => {
    const cards = [];
    
    const aboutCard = renderCard(
      <div className="card-content">
        <img src="abhinav_profile.jpg" alt="Profile Icon" />
        <div>
          <h4>Hi, I'm Abhinav!</h4>
          <p>
            Software Engineer dedicated to creating intuitive and visually appealing user interfaces.
          </p>
        </div>
      </div>, 
      'about-card', 
      'about-card'
    );
  
    const languagesCard = renderCard(
      <ul>
        <li>English</li>
        <li>Hindi</li>
        <li>Telugu</li>
      </ul>,
      'language-card',
      'languages-card',
      'Languages'
    );
  
    const socialContainer = (
      <div className="social-container" key="social-container">
        <Card className="image-only-card linkedin-card" key="linkedin-card">
          <a href="https://www.linkedin.com/in/abhinav-singirthi-158664148/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin_logo.svg" alt="LinkedIn" />
          </a>
        </Card>
        <Card className="image-only-card github-card" key="github-card">
          <a href="https://github.com/abnow-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="github_logo.svg" alt="GitHub" />
          </a>
        </Card>
      </div>
    );
  
    const certificatesCard = renderCard(
      <div className='cert-link-container'>
        {[
          { href: 'https://www.hackerrank.com/certificates/d48784dd6413', text: 'Frontend Developer (React) Certificate' },
          { href: 'https://www.hackerrank.com/certificates/c3ae7db81b46', text: 'React (Basic) Certificate' },
          { href: 'https://www.hackerrank.com/certificates/b63fe14db229', text: 'Angular (Intermediate) Certificate' },
          { href: 'https://www.hackerrank.com/certificates/734aea618165', text: 'Angular (Basic) Certificate' },
          { href: 'https://www.hackerrank.com/certificates/348454a7388e', text: 'Python (Basic) Certificate' },
          { href: 'https://www.credly.com/badges/4bfb3812-4b98-4a43-8d80-85ec22c4fa78?source=linked_in_profile', text: 'Microsoft Certified: Azure Fundamentals' }
        ].map((link, index) => (
          <div key={index} className='cert-link-container'>
            <a href={link.href} target='_blank' rel="noopener noreferrer">{link.text}</a>
          </div>
        ))}
      </div>,
      'certificates-card',
      'certificates-card',
      'Certificates'
    );
  
    const experienceCard = renderCard(
      <ul><br/>
        <li>Cisco: UI Engineer (2021)</li><br/>
        <li>Capgemini : Associate Consultant (2019 - 2021)</li>
      </ul>,
      'experience-card',
      'experience-card',
      'Experience'
    );
  
    const certificatesExperienceContainer = (
      <div className="certificates-experience-container" key="cert-exp-container">
        {certificatesCard}
        {experienceCard}
      </div>
    );
  
    const projectsCard = renderCard(
      <div className='project-container'>
        {[
          'Infra (Zero Touch Provisioning)',
          'Webex: Hybrid Services (Video Mesh)',
          'Webex: Hybrid Service (Hybrid Data Security)',
          'TORCH (Total Onestop Reporting for Corporate Healthcare)'
        ].map((project, index) => (
          <details key={index} className='project-detail-container'>
            <summary>{project}</summary>
          </details>
        ))}
      </div>,
      'projects-card',
      'projects-card',
      'Projects'
    );
  
    const skillsCard = renderCard(
      <div className="skills-icons">
        {[
          { src: "angular_logo.svg", alt: "Angular Icon", title: "Angular" },
          { src: "react_logo.svg", alt: "React.js Icon", title: "React.js" },
          { src: "javascript_logo.svg", alt: "JavaScript Icon", title: "JavaScript" },
          { src: "typescript_logo.svg", alt: "Typescript Icon", title: "Typescript" },
          { src: "jquery_logo.svg", alt: "jQuery Icon", title: "jQuery" },
          { src: "html_logo.svg", alt: "HTML Icon", title: "HTML" },
          { src: "css_logo.svg", alt: "CSS Icon", title: "CSS" },
          { src: "bootstrap_logo.svg", alt: "Bootstrap Icon", title: "Bootstrap" },
          { src: "sql_logo.svg", alt: "SQL Icon", title: "SQL" },
          { src: "nodejs_logo.svg", alt: "Node.js Icon", title: "Node.js" },
          { src: "python_logo.svg", alt: "Python Icon", title: "Python" },
          { src: "docker_logo.svg", alt: "Docker Icon", title: "Docker" }
        ].map((skill, index) => (
          <img key={index} src={skill.src} alt={skill.alt} title={skill.title} />
        ))}
      </div>,
      'skills-card',
      'skills-card',
      'Skills'
    );
  
    const themeToggleCard = renderCard(
      <div className="toggle-button" onClick={toggleTheme}>
        <div className={`toggle-circle ${isDarkTheme ? 'dark' : 'light'}`}></div>
      </div>,
      'theme-toggle-card',
      'theme-toggle-card',
      !isDarkTheme ? 'Dark Mode': 'light Mode'
    );

    const resumeCard = renderCard(
      <div className='resume-container'>
        <a href='Abhinav_Resume.pdf' target='_blank' rel='noopener noreferrer' download='Abhinav_Singirthi_Resume.pdf'>
          <img src='download_svg.webp' alt='Download Resume' height={50} width={50} />
        </a>
      </div>,
      'resume-card',
      'resume-card',
      'Resume'
    );    
    
  
    if (activeTab === 'all') {
      cards.push(aboutCard, skillsCard, certificatesExperienceContainer, socialContainer, projectsCard, languagesCard, resumeCard);
    }
  
    if (activeTab === 'about') {
      cards.push(aboutCard, languagesCard);
    }
  
    if (activeTab === 'work') {
      cards.push(projectsCard, socialContainer, certificatesExperienceContainer, skillsCard, resumeCard);
    }
  
    cards.push(themeToggleCard);
  
    return cards;
  };
  
  return (
    <div>
      <Tabs onChange={handleTabChange} />
      <div className="cards-container">
        {renderCards()}
      </div>
    </div>
  );
};

export default MainSection;
