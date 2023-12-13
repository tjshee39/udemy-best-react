import React from 'react';
import ReactDom from 'react-dom';
import '../../css/ErrorModal.css';
import Card from './Card';
import Button from './Button';

// modal 분리
const Backdrop = props => {
    return <div className='backdrop' onClick={props.onConfirm} />;
};

const ModalOverLay = props => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(
                <ModalOverLay 
                    title={props.title} 
                    message={props.message} 
                    onConfirm={props.onConfirm} 
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal;