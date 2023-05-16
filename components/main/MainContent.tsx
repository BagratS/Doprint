import { Box, Button, Flex, Text } from "@chakra-ui/react";
import MainContentPic from "./icons/MainContentPic";
import { useRouter } from "next/router";
import Link from "next/link";

function MainContent() {
  return (
    <Box>
      <Flex align="center" justify="center">
        <Box p="60px" alignItems="start">
          <Text fontSize="2.6875rem">Printing Made Simple</Text>
          <Text fontSize="16px">
            For You PrintWithMe is a self-serve, wireless printer station found
            in nationwide coffee shops, co-working spaces, apartment buildings
            and more.
          </Text>
          <Link href='/get-in-touch'>
            <Button
              background="rgb(5, 166, 190)"
              mt="10px"
            >
              Get in Touch
            </Button>
          </Link>
        </Box>
        <Box>
          <MainContentPic />
        </Box>
      </Flex>
    </Box>
  );
}

export default MainContent;
