import { useState } from 'react';

function Link(props) {
    const { data } = props;

    const [active, setActivity] = useState(false);

    const updateActivity = () => {
        setActivity(!active);
    }

    return (
        <div className={"link" + active ? ' active' : ''} key={data.icon} onClick={() => updateActivity()}>
            <img src={data.img} alt="" />
        </div>
    )
}

export default Link;