import logo from '../../images/logo.png';
import files from '../../images/files.png';
import chat from '../../images/chat.png';
import users from '../../images/users.png';
import stats from '../../images/stats.png';
import settings from '../../images/settings.png';
import userProfile from '../../images/profile-picture.png';
import '../../style/AsideMenu.css';
import Link from './Link.js';
import { Fragment, useState } from 'react';

function AsideMenu() {
    const links = [
        { icon: 'files', img: files },
        { icon: 'chat', img: chat },
        { icon: 'users', img: users },
        { icon: 'stats', img: stats },
        { icon: 'settings', img: settings },
    ];

    const [activeMenu, setActiveMenu] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const expandMenu = (i) => {
        if (i === activeMenu) {
            setExpanded(!expanded);
        } else {
            setActiveMenu(i);
            setExpanded(true);
        }
    }

    return (
        <Fragment>
            <aside>
                <img className="logo" src={logo} alt="Project logo" />
                <nav>
                    {links.map((link, i) =>
                        <Link key={i}
                            data={link}
                            active={i === activeMenu}
                            updateMenuSelection={() => expandMenu(i)} />)}
                </nav>
                <img className="profile" src={userProfile} alt="Project logo" />
            </aside>
            <div className={'menu-content' + (expanded ? ' active' : '')}>
                MENU CONTENT
            </div>
        </Fragment>
    )
}

export default AsideMenu;