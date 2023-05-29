import React, { useState } from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItems'

function Sidebar() {
    const [showSideBarContent, setShowSideBarContent] = useState(false)
    const routes = [
        {
            path: "/",
            name: "Home",
            img: "/assets/images/Home-Iocn.svg",
        },
        {
            path: "/data-analytics",
            name: "Data Analytics",
            img: "/assets/images/Data-Analytics-icon.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/iTransform-ETL",
            name: "iTransform ETL",
            img: "/assets/images/iTransform ETL.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/taxonomy-repositories",
            name: "Taxonomy & Repositories",
            img: "/assets/images/Taxonomy&Repositories.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/data-governance",
            name: "Data Governance",
            img: "/assets/images/Data-Governance.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/success-stories",
            name: "Success Stories",
            img: "/assets/images/Success -Stories.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/data-unification-portal",
            name: "Data Unification Portal",
            img: "/assets/images/Data-Unification.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/piLog-academy",
            name: "PiLog Academy",
            img: "/assets/images/PiLog -Academy.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/lean-governance",
            name: "Lean Governance",
            img: "/assets/images/Lean-Governance.png",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/smart-integraphics",
            name: "Smart InteGraphics",
            img: "/assets/images/logo_red.png",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/idqh",
            name: "IDQH",
            img: "/assets/images/DQH_icon.svg",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
        {
            path: "/pilog-cloud",
            name: "Pilog Cloud",
            img: "/assets/images/PiLogCloud-New-Logo-blue-red.png",
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                },
            ],
        },
    ];

    const showSideBar = () => {
        setShowSideBarContent(true)
    }

    const hideSideBar = () => {
        setShowSideBarContent(false)
    }
    console.log("showSideBarContent", showSideBarContent);
    return (
        <>
            <div className={`${showSideBarContent ? 'sidebar' : 'show'}`} onMouseLeave={(()=>hideSideBar())}>
                {routes.map((item, index) => <SidebarItem key={index} item={item} showSideBar={showSideBar}/>)}
            </div>
        </>
    )
}

export default Sidebar