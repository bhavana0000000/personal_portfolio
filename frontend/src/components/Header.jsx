import profilePic from '../assets/images/profile.png'
import resume from '../assets/images/resume.png'
const Header = () => (
  <div className="header-section" id="header">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h1>Bhavana Gullapalli</h1>
    <p className="subtitle">Web Developer | MERN Stack</p>
    <a
      className="btn"
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      download="Bhavana_Gullapalli_Resume.png"
    >
      View / Download Resume
    </a>
  </div>
)
export default Header
