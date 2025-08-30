import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import Threed from '../public/images/links/Threed_portfolio.png'
import Aneeshp from '../public/images/links/Aneesh_portfolio.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a web developer based in Dubai!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Aneesh Abdul Rahman
          </Heading>
          <p>Full stack developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Aneesh.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Aneesh is a web developer based in Dubai who enjoys building responsive, fast, and clean web apps. 
          He works across the stack with React, Node, and REST APIs, focuses on reusable components and consistent design systems,
           and cares a lot about UX. Previously, he worked as a Developer & System Admin trainee in India and KSA, 
           and he’s now available for new opportunities in the UAE.{' '}

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in India.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed Bachelor's degree, Anna University, Chennai (CGPA 8.34/10).
        </BioSection>
        <BioSection>
          <BioYear>2023-2024</BioYear>
          Web Developer at Trouvailler Enterprises (India).
        </BioSection>
        <BioSection>
          <BioYear>2024–2025</BioYear>
          System Admin Trainee, Star Link Information Technology, Saudi.
        </BioSection>
        <BioSection>
          <BioYear>2025-present</BioYear>
          Based in Dubai, UAE.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Chess, Music,{' '}
          <Link href="https://www.worldcubeassociation.org/persons/2017RAHM03" target="_blank">
            Speed Cubing
          </Link>
          ,{' '}
          {/* <Link href="https://500px.com/p/craftzdog" target="_blank">
            
          </Link> */}
          Photography

        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/cube786" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @cube786
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/aneesh-abdul-rahman-2b67b1286/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Linkedin
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://www.instagram.com/c.u.b.e_r?igsh=NzZxNGpqMTJiZnVi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @c.u.b.e_r
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://3-d-portfolio-omega-sandy.vercel.app/"
            title="3D Portfolio (psi)"
            thumbnail={Threed}
          >
            My 3D and interactive website 
          </GridItem>
          <GridItem
            href="https://three-dportfolio-psi.vercel.app"
            title="Aneesh Portfolio (phi)"
            thumbnail={Aneeshp}
          >
           Website with interactive elements.
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <p>
          Need a project done or looking for a dev?
          Let's work together to bring your ideas to life!
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/contact"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact Me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
