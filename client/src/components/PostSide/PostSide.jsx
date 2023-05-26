import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
const postSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts/>
    </div>
  )
}

export default postSide