import '../../style/Block.css';

function Block(props) {
    const { title, viewMore, childrenClass, children } = props;

    const titleHTML = (title) => {
        if (!title) {
            return '';
        }

        return <div className="title">{title}</div>;
    }

    const moreHTML = (more) => {
        if (!more) {
            return '';
        }

        return <div className="more">{more}</div>;
    }

    return (
        <div className="block">
            {titleHTML(title)}
            {moreHTML(viewMore)}
            <div className={'content' + (childrenClass ? ' ' + childrenClass : '')}>
                {children}
            </div>
        </div>
    )
}

export { Block }