import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle
} from 'react-icons/ai'
import './About.css'

const grades = '/Examensbevis - David Mould.pdf'
const cv = '/David.Mould-Fullstack Developer.pdf'

export const About: React.FC = () => {
  const handleDownloadCV = (): void => {
    window.open(cv, '_blank')
  }

  const handleDownloadGrades = (): void => {
    window.open(grades, '_blank')
  }

  const handleVisitWebsite = (): void => {
    window.open('https://david-mould-portfolio-page.netlify.app', '_blank')
  }

  return (
    <div id="about">
      <h1 className="heading">About Me</h1>
      <div className="about-container">
        <div className="image-container">
          <div className="square"></div>
          <img
            className="about-img"
            src="https://res.cloudinary.com/dele4dvi9/image/upload/v1680781966/memory-game-pictures/1679569823407_u98yg8.jpg"
            alt="David Mould"
          />
          <div className="social-links">
            <a
              href="https://github.com/DMould123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="social-img" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-mould-b6731a21a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="social-img" />
            </a>
            <a
              href="https://twitter.com/DM12_51"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle className="social-img" />
            </a>
          </div>
        </div>
        <p>
          I'm David Mould, a Junior Fullstack developer! <br />
          I hope you find this wedding budget planner helpful in organizing your
          special day. <br />
          If you are keen to find out more about me and my other projects,
          please visit my Portfolio website.
        </p>
        <div className="button-container">
          <button className="dw-btn" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="dw-btn" onClick={handleDownloadGrades}>
            Download Grades
          </button>
          <button className="dw-btn" onClick={handleVisitWebsite}>
            Visit My Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}
