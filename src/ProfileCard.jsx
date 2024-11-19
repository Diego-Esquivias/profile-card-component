import './ProfileCard.css'
const Profile = ({profileImage, firstName, lastName, email, socialMediaLinks={github, instagram, facebook}}) => {
    return (
        <div>
            <img src={profileImage} alt={firstName +'' + lastName} />
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
            </a>
            
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
            </a>
        </div>
    )
}

export default Profile