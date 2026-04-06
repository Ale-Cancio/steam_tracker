function ProfileCard({ profile }) {
    return (
        <div>
            <img src={profile.avatarfull} alt={profile.personaname} />
            <h2>{profile.personaname}</h2>
        </div>
    );
}

export default ProfileCard;