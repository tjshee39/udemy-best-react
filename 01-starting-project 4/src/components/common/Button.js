import '../../css/Button.css';

const Button = (props) => {
    return (
        <button
            className={`button`}
            type={props.type || 'button'}
            onClick={props.onclick}
        >
            {props.children}
        </button>
    )
}

export default Button;