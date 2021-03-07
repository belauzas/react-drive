import { Fragment } from "react";
import { Search } from './Search.js';
import { Block } from './Block.js';
import { Drives } from './Drives.js';
import { Folders } from './Folders.js';
import { RecentFiles } from './RecentFiles.js';
import '../../style/Content.css';
import imgGoogleDrive from '../../images/google-drive.png';
import imgDropbox from '../../images/dropbox.png';
import imgOneDrive from '../../images/one-drive.png';
import driveData from '../../data/drives.json';

function Content() {
    const activeDrive = 0;
    const images = [imgGoogleDrive, imgDropbox, imgOneDrive];

    const maxDrivesToDisplay = 3;
    const drives = driveData.length <= maxDrivesToDisplay ? driveData : driveData.slice(0, maxDrivesToDisplay);

    const maxFoldersToDisplay = 3;
    const activeFolders = driveData[activeDrive].folders;
    const folders = activeFolders.length <= maxFoldersToDisplay ? activeFolders : activeFolders.slice(0, maxFoldersToDisplay);

    const recentFilesData = driveData[activeDrive].recentFiles;

    return (
        <Fragment>
            <section className="content">
                <Search />
                <Block childrenClass="drives">
                    {drives.map((drive, i) => {
                        return (
                            <Drives data={drive} img={images[i]} active={i === activeDrive} key={i} />
                        )
                    })}
                </Block>
                <Block title="Folders" viewMore="View all" childrenClass="folders">
                    {folders.map((folder, i) => {
                        return (
                            <Folders data={folder} key={i} />
                        )
                    })}
                </Block>
                <Block title="Recent files" viewMore="View all" childrenClass="files">
                    <RecentFiles data={recentFilesData} />
                </Block>
            </section>
            <section className="stats">
                STATS
            </section>
        </Fragment>
    )
}

export { Content }