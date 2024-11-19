import './ProfileCard.css'
const Profile = ({profileImage, firstName, lastName, email, socialMediaLinks}) => {
    return (
        <div>
            <img src={profileImage} alt={firstName +'' + lastName} />
            <h2>{firstName} {lastName}</h2>
            <a>{email}</a>
        </div>
    )
}

export default Profile