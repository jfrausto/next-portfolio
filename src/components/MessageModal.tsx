import React, {useRef} from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Flex
} from '@chakra-ui/react'

export const MessageModal:React.FC = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const finalRef = useRef();

  return (
    <>
      <Button
        // px={"-10px"}
        ref={finalRef}
        // alignSelf={"fl"}
        // justifySelf={"flex-end"}
        // flexGrow={}
        onClick={onOpen}
        w={"100%"}
        h={"60px"}
        colorScheme={"green"}
      >
        Leave a Message
      </Button>
      <Modal 
        // minH={"50vh"}
        finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minH={"50vh"}
          // bg={"transparent"}
        >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. 
              Iusto unde corrupti expedita quis,
              sunt non delectus in, 
              facere distinctio reiciendis 
              nesciunt? Perferendis itaque 
              necessitatibus quae natus eum 
              laboriosam numquam eligendi.
            </Text>
          </ModalBody>

          <ModalFooter
            // bg={"red.700"}
          >
            <Flex
              w={"100%"}

            >
              <Button 
                colorScheme='green' 
                mr={3}
                w={"50%"}
              >
                Send
              </Button>
              <Button 
                w={"50%"}
                variant='outline'
                onClick={onClose}
              >
                Cancel
              </Button>
            </Flex>

        
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
