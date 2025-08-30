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
  <Layout title="classic">
    <Container>
      <Title>
        Classic Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        A simple, classic-style portfolio website with responsive design and
        clean layout.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cube786.github.io/portfolio-website/" target="_blank">
            https://cube786.github.io/portfolio-website/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          Web
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          HTML, CSS, JavaScript
        </ListItem>
      </List>
      <WorkImage src="/images/links/classic_one.png" alt="Classic Portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
