import { BiBookAlt } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { BiStats } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";

import '../styles/sidebar.css';
const Sidebar = () => {
    return <div className='menu'>
        <div className='logo'>
        <BiBookAlt className="logo-icon"/>
            <h2>EduFlex</h2>
        </div>

        <div className="menu-list ">
            <a href="#" className="item active">
            <BiHome className="icon"/>
                Dashboard
            </a>
            <a href="#" className="item">
            <MdAssignment className="icon" />
                Assignment
            </a>
            <a href="#" className="item">
            <BiSolidReport className="icon"/>
                Report
            </a>
            <a href="#" className="item">
            <BiStats className="icon"/>
                Stats
            </a>
            <a href="#" className="item">
            <BiMessage className="icon"/>
                Message
            </a>
            <a href="#" className="item">
            <BiHelpCircle className="icon"/>
               Help
            </a>
        </div>
    </div>
}

export default Sidebar