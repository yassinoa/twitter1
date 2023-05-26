
import './ProfileCard.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'

const ProfilePage = true;
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={cover} alt="" />
        <img src={profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>yassin mas</span>
        <span>Tun sfax</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage &&(
            <>
            <div className="vl">

            </div>
            <div className="follow">
              <span>3</span>
              <span>Posts</span>
            </div>
            </>
          )}



        </div>
        <hr />
      </div>
      {ProfilePage?"":<span>My Profile</span>}

    </div>
  )
}

export default ProfileCard