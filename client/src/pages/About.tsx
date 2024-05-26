import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle
} from 'react-icons/ai'
import './About.css'

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
            alt="David"
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
          I'm David Mould, a newly qualified developer! <br />
          I hope you enjoyed playing my memory game of my favorite football team
          :) <br />
          If you are keen to find out more about me, please visit my Portfolio
          website.
        </p>
      </div>
    </div>
  )
}
