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

  const renderCards = () => {
    let cards = [];

    if (activeTab === 'all' || activeTab === 'about') {
      cards.push(
        <Card className="about-card" key="about-card">
          <div className="card-content">
            <img src="/abhinav_profile.jpg" alt="Profile Icon" />
            <div>
              <h4>Hi, I'm Abhinav</h4>
              <p>
                Software Engineer dedicated to creating intuitive and visually appealing user interfaces.
              </p>
            </div>
          </div>
        </Card>
      );
      cards.push(
        <Card title="Skills" className="skills-card" key="skills-card">
          <div className="skills-icons">
            <img src="angular_logo.svg" alt="Angular Icon" title="Angular" />
            <img src="react_logo.svg" alt="React.js Icon" title="React.js" />
            <img src="javascript_logo.svg" alt="JavaScript Icon" title="JavaScript" />
            <img src="typescript_logo.svg" alt="Typescript Icon" title="Typescript" />
            <img src="jquery_logo.svg" alt="jQuery Icon" title="jQuery" />
            <img src="html_logo.svg" alt="HTML Icon" title="HTML" />
            <img src="css_logo.svg" alt="CSS Icon" title="CSS" />
            <img src="bootstrap_logo.svg" alt="Bootstrap Icon" title="Bootstrap" />
            <img src="sql_logo.svg" alt="SQL Icon" title="SQL" />
            <img src="nodejs_logo.svg" alt="Node.js Icon" title="Node.js" />
            <img src="python_logo.svg" alt="Python Icon" title="Python" />
            <img src="docker_logo.svg" alt="Docker Icon" title="Docker" />
          </div>
        </Card>
      );

      cards.push(
        <div className="certificates-experience-container" key="cert-exp-container">
          <Card title="Certificates" className="certificates-card" key="certificates-card">
            <div className='cert-link-container'>
            <div className='cert-link-container'>
              <a href='https://www.hackerrank.com/certificates/d48784dd6413' target='_blank' rel="noopener noreferrer">
                Frontend Developer (React) Certificate
              </a>
            </div>
            <div className='cert-link-container'>
              <a href='https://www.hackerrank.com/certificates/c3ae7db81b46' target='_blank' rel="noopener noreferrer">
                React (Basic) Certificate
              </a>
            </div>
            <div className='cert-link-container'>
              <a href='https://www.hackerrank.com/certificates/b63fe14db229' target='_blank' rel="noopener noreferrer">
                Angular (Intermediate) Certificate
              </a>
            </div>
            <div className='cert-link-container'>
              <a href='https://www.hackerrank.com/certificates/734aea618165' target='_blank' rel="noopener noreferrer">
                Angular (Basic) Certificate
              </a>
            </div>
            <div className='cert-link-container'>
              <a href='https://www.hackerrank.com/certificates/348454a7388e' target='_blank' rel="noopener noreferrer">
                Python (Basic) Certificate
              </a>
            </div>
            </div>
          </Card>
          <Card title="Total Experience: 5.3+ years" className="experience-card" key="experience-card">
            <ul><br/>
              <li>Cisco: UI Engineer (2021)</li><br/>
              <li>Capgemini : Associate Consultant (2019 - 2021)</li>
            </ul>
          </Card>
        </div>
      );

      cards.push(
        <div className="social-container" key="social-container">
          <Card className="image-only-card linkedin-card" key="linkedin-card">
            <img src='linkedin_logo.svg' alt="LinkedIn" />
          </Card>
          <Card className="image-only-card github-card" key="github-card">
            <img src='github_logo.svg' alt="GitHub" />
          </Card>
        </div>
      );

      cards.push(
        <Card title="Projects" className="projects-card" key="projects-card">
          <div className='project-container'>
            <details className='project-detail-container' open>
              <summary>Infra (Zero Touch Provisioning)</summary>
            </details>
            <details className='project-detail-container'>
              <summary>Webex: Hybrid Services (Video Mesh)</summary>
            </details>
            <details className='project-detail-container'>
              <summary>Webex: Hybrid Service (Hybrid Data Security)</summary>
            </details>
            <details className='project-detail-container'>
              <summary>TORCH (Total Onestop Reporting for Corporate Healthcare)</summary>
            </details>
          </div>
        </Card>
      );
    }

    cards.push(
      <Card title="Theme Toggle" className="theme-toggle-card" key="theme-toggle-card">
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
      </Card>
    );

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
