// import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import nodeJsDocument from '../../assets/Node JS - Project creation and basic setup for handling Client requests.pdf';
import './styles.css';

export function Project() {

  const reduxPageNavigation = () => {
    window.open('https://www.blogs.yogeshrajadev.com/', '_blank');
  }

  const downloadNodeJSDocument = () => {
    const link = document.createElement('a');
    link.href = nodeJsDocument;
    link.download = 'Node JS - Project creation and basic setup for handling Client requests.pdf'; // The filename that the user will get
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container" id="blogs">
      <h2>My Blogs</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project" onClick={reduxPageNavigation}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.blogs.yogeshrajadev.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Integrate Redux with React Based Application</h3>
              <p> This article discuss about how to configure the React Redux in our React Js application, a Step by step guide with for API integration. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Redux</li> <li>Axios</li> <li>Thunk</li><li>Store</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" onClick={downloadNodeJSDocument}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Create a new Node JS Project and handling the Client HTTP request</h3>
              <p>
                This document had the steps about how to create a new Node Js project and basic setup for handling Client send HTTP.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node JS</li>
                <li>Express</li>
                <li>Database</li>
                <li>Connection</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Credit Risk Analysis Project</h3>
              <p>
                Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </section>
  );
}