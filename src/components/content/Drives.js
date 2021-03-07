import '../../style/Drives.css';

function Drives(props) {
    const { data, img, active } = props;
    const { driveName, capacity } = data;
    const { used, total, units } = capacity;
    const barSize = used / total * 100;
    let driveClasses = 'drive';

    if (active) {
        driveClasses += ' active';
    }

    return (
        <div className={driveClasses}>
            <img className="drive-logo" src={img} alt="" />
            <div className="actions">...</div>
            <div className="name">{driveName}</div>
            <div className="progress">
                <div className="used">{used} {units}</div>
                <div className="total">{total} {units}</div>
                <div className="bar">
                    <div className="value" style={{ width: barSize + '%' }}></div>
                </div>
            </div>
        </div>
    )
}

export { Drives }