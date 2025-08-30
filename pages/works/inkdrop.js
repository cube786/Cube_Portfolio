import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        3D Portfolio (psi) <Badge>2023</Badge>
      </Title>
      <P>
        A 3D portfolio site showcasing my projects with interactive scenes and
        smooth animations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://3-d-portfolio-omega-sandy.vercel.app/">
           https://3-d-portfolio-omega-sandy.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Three.js, Styled Components</span>
        </ListItem>
      </List>

      <WorkImage src="/images/links/Threed_portfolio.png" alt="Inkdrop" />
      <WorkImage src="/images/links/Threed_2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
