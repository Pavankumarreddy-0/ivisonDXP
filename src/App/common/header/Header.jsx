import React from 'react'
import HeaderStyles from './Header.module.css'

function Header() {
  const rightSideIcons = [
    {
      img: "/assets/images/dxpmenuList.png"
    },
    {
      img: "/assets/images/Notifications.png"
    },
    {
      img: "/assets/images/calendarBlue.png"
    },
    {
      img: "/assets/images/Settings_Icon.svg"
    },
    {
      img: "/assets/images/Help-Icon.svg"
    },
    {
      img: "/assets/images/Profile_Icon.svg"
    },
  ]
  return (
    <div className={HeaderStyles['header']}>
      <div className={HeaderStyles['leftSide']}>
        <ul>
          <li><img src={"/assets/images/PiLogDots.png"} alt="loading" /></li>
          <li><img src={"/assets/images/PilogCloudRedBlue.gif"} className={HeaderStyles['cloudRedBlue']} alt="loading" /></li>
        </ul>
      </div>
      <div className={HeaderStyles['center']}>
        <div className={HeaderStyles["input_group_div"]}>
          <div className="input-group border" id='input_group'>
            <span className="input-group-text border-0" id="basic-addon1"><img src={"/assets/images/search_blue.png"} alt='loading' /></span>
            <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className={HeaderStyles['setting_icon']}>
           <img src="/assets/images/Settings_Icon.svg"  alt="loading"/>
        </div>
        <div className={HeaderStyles['drop_down']}>
             <select>
                <option defaultValue={""}>En (Us)</option>
             </select>
        </div>
      </div>
      <div className={HeaderStyles['rightSide']}>
        <ul>
          {
            rightSideIcons.map((icon, id) => {
              return (
                <li key={id}>
                  <img src={icon.img} alt="loading" />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div >
  )
}

export default Header;