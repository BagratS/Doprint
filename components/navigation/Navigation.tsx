import {
  Box,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import LogoIcon from "../../icons/LogoIcon";
import NavigationMobile from "./NavigationMobile";
import NavigationDesktop from "./NavigationDesktop";

function Navigation() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Flex justify="space-around" align="center">
          <LogoIcon />
          { isDesktop ? <NavigationDesktop /> :
          <NavigationMobile />

          }
        </Flex>
      </Box>
    </Box>
  );
}

export default Navigation;
