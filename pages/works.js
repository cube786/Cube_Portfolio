import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import threed from '../public/images/links/Threed_portfolio.png'
import Aneesh1 from '../public/images/links/Aneesh_portfolio.png'
import classic1 from '../public/images/links/classic_one.png'
import phi2 from '../public/images/links/phi_two.png'
import trouvailler from '../public/images/links/trouvailler.png'
import starlink from '../public/images/links/starlink.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="3D Portfolio (psi)" thumbnail={threed}>
            
            Experimental 3D portfolio variant with different scenes.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="3d-omega"
            title="3D Portfolio (omega)"
            thumbnail={Aneesh1}
          >
            A 3D-styled portfolio showcasing projects and interactions.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="classic"
            title="Classic Portfolio"
            thumbnail={classic1}
          >
            A classic portfolio site with responsive layout.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="phi" thumbnail={phi2} title="Aneesh Portfolio (phi)">
           Minimal portfolio variant focused on content.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experience
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="trouvailler" thumbnail={trouvailler} title="Trouvailler Enterprises — Developer">
            Apr 2023 – Jun 2024 · React/Tailwind, REST APIs, Windows Server & Active Directory.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="starlink"
            thumbnail={starlink}
            title="Star Link IT (KSA)"
          >
             Jul 2024 – Jan 2025 · System monitoring, updates, server ops.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
