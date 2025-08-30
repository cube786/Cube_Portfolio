// components/navbar.js  — REPLACEMENT
import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { AiOutlineFileText } from 'react-icons/ai'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>

        

          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>

          <LinkItem href="/stack" path={path}>
            Stack
          </LinkItem>
         

          
          <Link as={NextLink} href="/contact" passHref>
            <Button
              ml={2}
              variant="solid"
              colorScheme="teal"
              size="sm"
              aria-label="Contact"
            >
              Contact
            </Button>
          </Link>

         
          <LinkItem
            target="_blank"
            href="https://drive.google.com/file/d/1KSFtNuXJboE0noa4ISyJVhkgNK7bd7cd/view?usp=sharing"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 8 }}
            pl={2}
          >
            <AiOutlineFileText />
            Resume
          </LinkItem>
         
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
             
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                
                <MenuItem as={MenuLink} href="/stack">
                  Stack
                </MenuItem>
               
                <MenuItem as={MenuLink} href="/contact">
                  Contact
                </MenuItem>

               
               
               
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
