import profilePic from '../assets/images/profile.png'

const Header = () => (
  <div className="header-section" id="header">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h1>Bhavana Gullapalli</h1>
    <p className="subtitle">Web Developer | MERN Stack</p>
    <a className="btn" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
      Download Resume
    </a>
  </div>
)
export default Header
