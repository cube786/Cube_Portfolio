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
  <Layout title="3d-omega">
    <Container>
      <Title>
        3D Portfolio (omega) <Badge>2023</Badge>
      </Title>
      <P>
        An experimental 3D portfolio variant with alternate scenes and dynamic
        transitions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://three-dportfolio-psi.vercel.app " target="_blank">
            https://three-dportfolio-psi.vercel.app  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          Web
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          React, Three.js, Styled Components
        </ListItem>
      </List>
      <WorkImage src="/images/links/Aneesh_portfolio.png" alt="3D Portfolio (omega)" />
      <WorkImage src="/images/links/Aneesh_portfolio2.png" alt="3D Portfolio (omega)" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
