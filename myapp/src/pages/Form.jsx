import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import { useState } from 'react';

let initValue = {
    name: "",
    mail: "",
    add: "",
}

export default function Contact () {
    const [value, setValue] = useState(initValue);
const toast=useToast()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const handleSubmit = () => {

        // Push new form data to the array
        const newData = [...existingData, value];

        // Store the updated array in local storage
        localStorage.setItem('formData', JSON.stringify(newData));
        // alert("submitted");
        setValue(initValue)
        // console.log(value);
        toast({
            title: 'Details Submitted .',
            description:"",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:"top-center"
        })
    };

    return (
        <>
        <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                                +91-988888888
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                hello@abc.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                Karnavati, India
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsGithub size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsDiscord size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="nameInput">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none">
                                                        <BsPerson color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input name="name" onChange={handleChange} value={value.name} type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="mailInput">
                                                <FormLabel>Mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none">
                                                        <MdEmail color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input name="mail" onChange={handleChange} value={value.mail} type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="messageInput">
                                                <FormLabel>Message</FormLabel>
                                                <Textarea name="add" onChange={handleChange} value={value.add}
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="message"
                                                />
                                            </FormControl>
                                            <FormControl float="right">
                                                <Button onClick={handleSubmit} variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
            </Container>

            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Message</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {existingData.map((ele) => {
                            return <Tr>
                                <Td>{ele.name}</Td>
                                <Td>{ele.mail}</Td>
                                <Td isNumeric>{ ele.add}</Td>
                            </Tr>
                        })}


                    </Tbody>

                </Table>
            </TableContainer>

        </>
    )
}
