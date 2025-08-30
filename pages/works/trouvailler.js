import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="trouvailler">
    <Container>
      <Title>
        Trouvailler Enterprises — Developer & System Admin Trainee <Badge>2023–2024</Badge>
      </Title>
      <P>
        As a web Developer at Trouvailler Enterprises (India),
        I worked on frontend and backend systems This role gave me full-stack experience across React
        apps.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Duration</Meta>
          Apr 2023 – Jun 2024
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
         Full Stack Developer
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          React, Tailwind CSS, REST APIs, Node.js.
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          India
        </ListItem>
        
      </List>
      <WorkImage src="/images/links/trouvailler.png" alt="Trouvailler Enterprises" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
