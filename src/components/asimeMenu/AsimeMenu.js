import logo from '../../images/logo.png';
import files from '../../images/files.png';
import chat from '../../images/chat.png';
import users from '../../images/users.png';
import stats from '../../images/stats.png';
import settings from '../../images/settings.png';
import userProfile from '../../images/profile-picture.png';
import '../../style/AsimeMenu.css';
import Link from './Link.js';

function AsimeMenu() {
    const links = [
        { icon: 'files', img: files },
        { icon: 'chat', img: chat },
        { icon: 'users', img: users },
        { icon: 'stats', img: stats },
        { icon: 'settings', img: settings },
    ]
    return (
        <aside>
            <img className="logo" src={logo} alt="Project logo" />
            <nav>
                {links.map(link => <Link data={link} />)}
            </nav>
            <img className="profile" src={userProfile} alt="Project logo" />
        </aside>
    )
}

export default AsimeMenu;