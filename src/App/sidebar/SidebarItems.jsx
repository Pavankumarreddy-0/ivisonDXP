import { useState } from "react"
import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function SidebarItem({ item, showSideBar }) {
    const [open, setOpen] = useState(false)
    if (item.subRoutes) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title"  onMouseOver={showSideBar}>
                    <div className="single_item">
                        <Link to="#" >
                            {item.img && <img src={item.img} className={item.img} alt="loading" />}
                            {item.name}
                        </Link>
                    </div>
                    <div>
                        <i className="fa fa-angle-right toggle-btn" onClick={() => setOpen(!open)}></i>
                    </div>
                </div>
                <div className="sidebar-content">
                    {item.subRoutes.map((child, index) => <SidebarItem key={index} item={child} showSideBar={showSideBar} />)}
                </div>
            </div>
        )
    } else {
        return (
            <div onMouseOver={showSideBar}>
                <Link to={item.path || "#"} className="sidebar-item plain">
                    {item.img && <img src={item.img} className={item.img} alt="loading" />}
                    {item.name}
                </Link>
            </div>
        )
    }
}