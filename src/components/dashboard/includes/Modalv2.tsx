
// MODAL REF:. https://nextui.org/docs/components/modal

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
                                <TrashIcon className="w-11 h-7" />
                                <span>Deletar</span>
                            </ModalHeader>
                            <ModalBody>

                                <p className="text-center font-semibold">
                                    Desejas Excluir O Utilizador ? {props.id && (props.id)}
                                </p>
                            </ModalBody>
                            <ModalFooter className="justify-center flex">
                                <Button color="danger" onPress={onClose}>
                                    Sim
                                </Button>
                                <Button color="primary" onPress={onClose}>
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
