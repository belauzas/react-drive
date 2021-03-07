import imgFolder from '../../images/folder.png';
import '../../style/Folders.css';

function Folders(props) {
    const { data } = props;
    const { folderName, fileCount } = data;

    return (
        <div className="folder">
            <img src={imgFolder} alt="" />
            <div className="name">{folderName}</div>
            <div className="count">{fileCount} file{fileCount === 1 ? '' : 's'}</div>
        </div>
    )
}

export { Folders }