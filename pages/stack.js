// pages/stack.js
import { Container, Heading, Text, List, ListItem, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Stack = () => (
  <Layout title="Stack">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Tech Stack
      </Heading>
      <Text mb={6}>
        Here are the main tools and technologies I use to design, build and
        deploy modern, responsive web applications.
      </Text>
      <List spacing={3}>
        <ListItem>⚡ <b>Languages:</b> JavaScript (ES6+), HTML5, CSS3</ListItem>
        <ListItem>⚛ <b>Frontend:</b> React.js, Next.js, Chakra UI, Tailwind CSS</ListItem>
        <ListItem>🛠 <b>Backend:</b> Node.js, Express</ListItem>
        <ListItem>🗄 <b>Databases:</b> PostgreSQL, MySQL basics</ListItem>
        <ListItem>☁ <b>APIs:</b> RESTful APIs integration</ListItem>
        <ListItem>🔧 <b>Tools:</b> Git, GitHub, VS Code</ListItem>
        <ListItem>🚀 <b>Other:</b> Agile/Scrum, CI/CD basics</ListItem>
      </List>
      <Text mt={8}>
        Curious about my projects? Check out my{' '}
        <Link href="/works" color="teal.500">
          portfolio
        </Link>{' '}
        page.
      </Text>
    </Container>
  </Layout>
)

export default Stack
