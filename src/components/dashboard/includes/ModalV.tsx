
import Modal from 'react-modal';

interface ModaProps {
    isOpen: boolean
    onRequestClose: () => void
}

export default function ModalView(props: ModaProps) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '30px'
        },
    };



    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={customStyles}
        >

            <button
                type='button'
                onClick={props.onRequestClose}
                className='react-modal-close'
            >
            </button>

            <div>I am a modal</div>

        </Modal>
    )
}