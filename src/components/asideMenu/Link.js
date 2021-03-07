function Link(props) {
    const { data, active, updateMenuSelection } = props;

    const updateActivity = () => {
        updateMenuSelection();
    }

    return (
        <div className={"link" + (active ? ' active' : '')} onClick={updateActivity}>
            <img src={data.img} alt="" />
        </div>
    )
}

export default Link;