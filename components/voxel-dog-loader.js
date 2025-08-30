import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    pt={['40px', '60px', '80px']}   // 👈 push cube down
    mb={['-40px', '-100px', '-160px']} // 👈 adjust bottom spacing
    w={[320, 520, 720]}
    h={[420, 620, 820]}
    position="relative"
  >
    {children}
  </Box>
))


const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
