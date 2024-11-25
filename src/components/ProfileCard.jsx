import './ProfileCard.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Profile = ({profileImage, firstName, lastName, email, socialMediaLinks}) => {
    return (
        <div className='profileCard'>
            <img src={profileImage} alt={firstName +'' + lastName} className='profileImage' />
            <hr />
            <h2>{firstName} {lastName}</h2>
            <p className='emailLink'>
                <a href={email}>
                    {email}
                </a>
            </p>
            <div className="linksContainer">
                <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className='socialLinks'>
                    <FaGithub style={{color: 'whitesmoke'}}/>
                </a>
                <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className='socialLinks'>
                    <FaInstagram style={{color: 'whitesmoke'}}/>
                </a>
                <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className='socialLinks'>
                    <FaFacebook style={{color: 'whitesmoke'}}/>
                </a>
            </div>
        </div>
    )
}

export default Profile