import React from 'react'
import FooterStyles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className={FooterStyles['footer']}>
            <div className={FooterStyles['leftSide']}>
                <ul>
                    <li>
                        <Link to="#" className={FooterStyles['fa-linkedin']}><i className="fa fa-linkedin"></i></Link>
                    </li>
                    <li>
                        <Link to="#" className={FooterStyles['fa-facebook']}><i className="fa fa-facebook"></i></Link>
                    </li>
                    <li>
                        <Link to="#" className={FooterStyles['fa-instagram']}><i className="fa fa-instagram"></i></Link>
                    </li>
                    <li>
                        <Link to="#" className={FooterStyles['fa-twitter']}><i className="fa fa-twitter"></i></Link>
                    </li>
                    <li>
                        <Link to="#" className={FooterStyles['fa-youtube-play']}><i className="fa fa-youtube-play"></i></Link>
                    </li>
                </ul>
            </div>
            <div className={FooterStyles['rightSide']}>
                <p>Copyright &copy; 2023 Pilog Group</p>
            </div>
        </div>
    )
}


export default Footer