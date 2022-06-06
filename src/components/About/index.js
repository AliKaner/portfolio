/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faJava,
  faUnity,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import cSharp from '../../assets/images/cSharp.png';
import cPlus from '../../assets/images/c++.png';
import aseprite from '../../assets/images/aseprite.png';
import resume from '../../assets/files/resume.pdf';
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Hi, I'm Ali Kaner. I'm computer engineer and game developer.
          </p>
          <p>
            I've been interested in computer games since I was little.
            That's why I got into the game world and become a game developer.
          </p>
          <p>
            I love anime and reading books about fantasy fiction.
          </p>
          <p>If you are more interested with my experience download my  </p>
          <p> <Link className="flat-button" to={resume} target="_blank" download>resume</Link> </p>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faUnity} color="#4B8BBE" />
            </div>
            <div className="face2">
              <img style={{width: '50%', height: '50%'}} src={cPlus}/>
            </div>
            <div className="face3">
              <img style={{width: '100%', height: '100%'}} src={cSharp}/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
            </div>
            <div className="face5">
              <img style={{width: '60%', height: '35%'}} src={aseprite}/>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
