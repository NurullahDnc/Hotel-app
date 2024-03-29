import React from 'react'
import { IoClose } from "react-icons/io5";
import Input from '../general/Input';
import Button from '../general/Button';


const Modal = ({isOpen, onClose, onSubmit, btnLabel, title, bodyElement, footerElement}) => {

    //isopen false ise null don, true gelirse modal don
    if(!isOpen){
        return null
    }

    return (
        <div className='modal'>
            <div className='modal-container'>

                {/*modal title kısmı */}
                <div className='modal-container-title'>
                    <div className='modal-container-title-text'>
                        {title}
                    </div>
                    <button onClick={onClose}>
                        <IoClose size={30} />
                    </button>
                </div>

                {/*modal icerik kısmı */}
                {bodyElement}

                {/*modal ana button kısmı */}
                <Button onSubmit={onSubmit} btnText={btnLabel}  />  

                {/*modal alt kısmı */}
                {footerElement}

            </div>
        </div>
    )
}

export default Modal
