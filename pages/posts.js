import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import cube4 from '../public/images/contents/cube4.jpg'
import life from '../public/images/contents/life.jpg'
import beach from '../public/images/contents/beach.jpg'
import card from '../public/images/contents/card.jpg'
import friends from '../public/images/contents/friends.jpg'
import grass from '../public/images/contents/grass.jpg'
import lamp from '../public/images/contents/lamp.jpg'
import sun from '../public/images/contents/sun.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Text fontSize="md" mb={6} color="gray.500">
        A collection of moments, ideas, and hobbies I enjoy.
      </Text>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            
            thumbnail={cube4}
            href="https://www.instagram.com/reel/C2kTMc0r9Vy/?igsh=MWVoMjAzZzNpbzE3bQ=="
          />
          <GridItem
            
            thumbnail={life}
            href="https://www.instagram.com/reel/CjgTMmiD09v/?igsh=Ynh0b3Q0aml4bzBx"
          />
          <GridItem
            
            thumbnail={beach}
            href="https://www.instagram.com/p/CxgEN5rvn0B/?igsh=MWNrYXB0cGRqbjE5eA=="
          />
          <GridItem
            
            thumbnail={card}
            href="https://www.instagram.com/reel/CeqtHPGDMJK/?igsh=bDdiM2tpenZ2MWNx"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            
            thumbnail={friends}
            href="https://www.instagram.com/reel/CwdJrbltEbg/?igsh=MTR3MmpuNmRudHgwbg=="
          />
          <GridItem
            
            thumbnail={grass}
            href="https://www.instagram.com/p/CuUwItqvbRv/?igsh=MTg1eXE0anIwdmVsMA=="
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            
            thumbnail={sun}
            href="https://www.instagram.com/p/CtcCaMIPJoT/?igsh=djlycnA5ZnNiZzZo"
          />
          <GridItem
            
            thumbnail={lamp}
            href="https://www.instagram.com/p/CwmcaPtLbUN/?igsh=bXd6bXFyaXp5dTF3"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
