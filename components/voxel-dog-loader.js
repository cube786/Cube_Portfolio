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
    pt={['60px', '80px', '100px']}   // more top padding
    mb={['-60px', '-120px', '-180px']} // adjust bottom space
    w={[320, 520, 720]}
    h={[520, 720, 920]}   // 👈 increased height
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
