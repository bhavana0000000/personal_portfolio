import profilePic from '../assets/images/profile.png'
import resume from '../assets/images/resume.png'
const Header = () => (
  <div className="header-section" id="header">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h1>Bhavana Gullapalli</h1>
    <p className="subtitle">Web Developer | MERN Stack</p>
    <a className="btn" href={resume} download="resume.png">  
      <img src={resume} alt="Resume" className="resume-img" />
      Download Resume
    </a>
  </div>
)
export default Header
