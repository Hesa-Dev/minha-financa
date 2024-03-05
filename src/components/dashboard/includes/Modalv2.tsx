
// MODAL REF:. https://nextui.org/docs/components/modal
//  onPress={onClose} color="primary" 

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from "@nextui-org/react";
import {
    TrashIcon,
} from "@heroicons/react/20/solid";

import React from "react";

interface ModaProps {
    isOpen?: boolean
    id?: string
    onRequestClose?: () => void
    deletUser:()=> void 
}

export default function ModalV2(props: ModaProps) {

    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onOpenChange={props.onRequestClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader  className="flex flex-row gap-1">
                                <TrashIcon className="w-11 h-7 text-red-600" />
                                <span>Deletar</span>
                            </ModalHeader>
                            <ModalBody>

                                <p className="text-center font-semibold">
                                    Desejas Excluir O Utilizador ? {props.id && (props.id)}
                                </p>
                            </ModalBody>
                            <ModalFooter className="justify-center flex">
                                <Button  className="bg-red-500 text-white"    onClick={props.deletUser} >
                                    Sim
                                </Button>
                                <Button   className="bg-indigo-600 text-white" onPress={onClose}>
                                    Não
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
