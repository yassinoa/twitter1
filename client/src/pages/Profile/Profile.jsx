import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PostSide from '../../components/PostSide/PostSide'
import './Profile.css'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>

      <div className="profile-center">
        <ProfileCard/>
        <PostSide />
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile