import React from 'react'
import ProfileHeader from "../components/ProfileHeader"
import "../styles/profile.css"
import userImage from "../assets/teacher.jpeg"
import { BiBook } from "react-icons/bi";

const courses=[
    {
        title:'HTML CSS',
        duration:'2 houres',
        icon:<BiBook />,
    },
    {
        title:'Javascript',
        duration:'2 houres',
        icon:<BiBook />,
    },
    {
        title:'React.JS',
        duration:'2 houres',
        icon:<BiBook />,
    },
]
const Profile = () => {
  return (
    <div className="profile">
         <ProfileHeader/>
         <div className="user-profile">
            <div className="user-detail">
                <img src={userImage} alt=""/>
                <h3 className="username">Tamilarasi</h3>
                <span className>Teacher</span>
            </div>
            <div className="user-courses">
                {courses.map((coures) => (
                    <div className="course">
                        <div className="course-detail">
                            <div className="course-cover">{coures.icon}</div>
                            <div className="course-name">
                                <h5 className='title'>{coures.title}</h5>
                                <span className="duration">{coures.duration}</span>
                            </div>
                        </div>
                        <div className="action">:</div>
                    </div>
                ))}
            </div>
         </div>
    </div>
  )
}

export default Profile;