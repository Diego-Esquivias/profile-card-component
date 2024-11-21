import './ProfileCard.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Profile = ({profileImage, firstName, lastName, email, socialMediaLinks}) => {
    console.log(socialMediaLinks)
    console.log("---------------------------")
    console.log(socialMediaLinks.github)

    return (
        <div className='profileCard'>
            <img src={profileImage} alt={firstName +'' + lastName} className='profileImage' />
            <hr />
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            
            <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                <FaGithub style={{color: 'black'}}/>
            </a>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{color: 'black'}}/>
            </a>
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{color: 'black'}}/>
            </a>
        </div>
    )
}

export default Profile