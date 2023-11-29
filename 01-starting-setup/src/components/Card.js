import '../css/Card.css';

const Card = (props) => {
    // Card를 호출한 위치에서 설정한 className 가져옴
    const classes = 'card ' + props.className;
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;