
import Modal from 'react-modal';
// import '@/styles/componentes.css'

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
            padding: '30px',
            background: "red"
        }
    };

    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={customStyles}
            // className="Overlay"
            // https://codepen.io/claydiffrient/pen/KNjVrG estilizando modal 
        >

            <button
                type='button'
                onClick={props.onRequestClose}
                className='react-modal-close  text-cyan-800 bg-yellow-800'
            />
            
            <div>I am a modal</div>

        </Modal>
    )
}