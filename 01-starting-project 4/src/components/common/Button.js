import '../../css/Button.css';

const Button = (props) => {
    console.log("button props", props)
    return (
        <button
            className={`button`}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;