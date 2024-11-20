import './ProfileCard.css'
const Profile = ({profileImage, firstName, lastName, email, socialMediaLinks}) => {
    const keys = Object.keys(socialMediaLinks)

    return (
        <div>
            <img src={profileImage} alt={firstName +'' + lastName} />
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            
            {keys.map((key, index) => (
                <a href={socialMediaLinks[key]} target="_blank" rel="noopener noreferrer">
                    {key}
                </a>
            ))}
        </div>
    )
}

export default Profile