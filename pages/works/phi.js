import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="phi">
    <Container>
      <Title>
        Aneesh Portfolio (phi) <Badge>2024</Badge>
      </Title>
      <P>
        A minimal portfolio variant focused on simplicity and clear content
        presentation.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://aneesh-portfolio-phi.vercel.app/" target="_blank">
            https://aneesh-portfolio-phi.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          Web
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          React, Next.js, Chakra UI
        </ListItem>
      </List>
      <WorkImage src="/images/links/phi_one.png" alt="Aneesh Portfolio (phi)" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
