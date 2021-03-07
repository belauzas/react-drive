import '../../style/RecentFiles.css';

function RecentFiles(props) {
    const { data } = props;

    console.log(data);

    return (
        <div className="recent-files">
            <div>Folder name</div>
            <div>file count</div>
        </div>
    )
}

export { RecentFiles }