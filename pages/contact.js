// pages/contact.js
import { Container, Heading, Link, List, ListItem, Icon, Button } from '@chakra-ui/react'
import { IoCall, IoMail, IoLocation } from 'react-icons/io5'
import Layout from '../components/layouts/article'

const Contact = () => (
  <Layout title="Contact">
    <Container>
      <Heading as="h3" variant="section-title" mb={4}>Contact</Heading>
      <List spacing={3}>
        <ListItem>
          <Button as={Link} href="tel:+971565916778" leftIcon={<Icon as={IoCall} />} variant="ghost" colorScheme="teal">
            +971 565916778
          </Button>
        </ListItem>
        <ListItem>
          <Button as={Link} href="mailto:aneeshabdulrahman786@gmail.com" leftIcon={<Icon as={IoMail} />} variant="ghost" colorScheme="teal">
            aneeshabdulrahman786@gmail.com
          </Button>
        </ListItem>
        <ListItem>
          <Button as={Link} href="https://www.google.com/maps/search/?api=1&query=Karama,+Dubai,+UAE" leftIcon={<Icon as={IoLocation} />} variant="ghost" colorScheme="teal" isExternal>
            Karama, Dubai, UAE
          </Button>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Contact
