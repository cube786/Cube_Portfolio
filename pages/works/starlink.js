import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="starlink">
    <Container>
      <Title>
        Star Link IT (KSA) — System Admin Trainee <Badge>2024–2025</Badge>
      </Title>
      <P>
        As a System Admin Trainee at Star Link Information Technology (KSA), I
        supported enterprise IT operations. My responsibilities included server
        monitoring, updates/patching, and ensuring system reliability across
        the organization.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Duration</Meta>
          Jul 2024 – Jan 2025
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          System Admin Trainee
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          Windows Server, System Monitoring Tools, IT Operations
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          Kingdom of Saudi Arabia
        </ListItem>
        <ListItem>
          <Meta>More</Meta>
          <Link
            href="http://starlinkksa.com/"
            target="_blank"
          >
            Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/links/starlink.png" alt="Star Link IT (KSA)" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
