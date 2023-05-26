import {useState,useRef}from "react";
import ProfieImg from '../../img/profileImg.jpg'
import './PostShare.css'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule,UilTimes} from "@iconscout/react-unicons"
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../actions/uploadAction";

const PostShare = () => {
  const [image,setImage]= useState(null)
  const imageRef=useRef()
  const desc=useRef()
  const dispatch = useDispatch()
  const user =useSelector((state)=>state.authReducer.authData)
  const onImageChange=(event)=>{
    if(event.target.files && event.target.files[0]){
      let img=event.target.files[0];
      setImage(img);
    }
  };

  const handlesubmit=(e)=>{
    e.preventDefault();

    const newPost={
      userId:user._id,
      desc:desc.current.value
    }

    if(image){
      const data= new FormData()
      console.log(data)
      const filename= Date.now()
      data.append("name",filename)
      data.append("file",image)
      console.log(data)
      newPost.image=filename;
      console.log(newPost)

      try {
        dispatchEvent(uploadImage(data))
      } catch (error) {
        
      }
    }
    
  }


    return (
    <div className="PostShare">
      <img src={ProfieImg} alt="" />
      <div>
        <input
        ref={desc}
        required
        type="text" placeholder="Waht's happening ?" />
      
        <div className="PostOption">
          <div className="option" style={{color:"var(--photo)"}}
          onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            Photo
          </div>
          <div className="option" style={{color:"var(--video)"}}>
            <UilPlayCircle/>
            Video
          </div>
          <div className="option" style={{color:"var(--location)"}}>
            <UilLocationPoint/>
            Location
          </div>
          <div className="option" style={{color:"var(--shedule)"}}>
            <UilSchedule/>
            Shedule
          </div>
          <button className='button ps-button' onClick={handlesubmit} >Share</button>
          <div style={{display:"none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}

      </div>
    </div>
  )
}

export default PostShare