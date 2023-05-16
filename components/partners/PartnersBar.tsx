import { Box, Text, Flex } from "@chakra-ui/react";
import company1871 from "../../assets/partner_logos/1871-white.png";
import companyTcr from "../../assets/partner_logos/TCR+Logo+(White).png";
import companyInvesvo from "../../assets/partner_logos/Invesco+Logo+(White).png";
import companyCA from "../../assets/partner_logos/cav.png";
import companyBozzuto from "../../assets/partner_logos/bozzuto-white.png";
import CompanyLogos from "./CompanyLogos";

function PartnersBar() {
  return (
    <Box background="rgb(23, 55, 83)" w="100%" h="185">
      <Text color="white" textAlign="center" padding='20px'>
        Over 1,000 Partners Nationwide
      </Text>
      <Flex justify="space-around">
        <CompanyLogos pic={company1871} />
        <CompanyLogos pic={companyTcr} />
        <CompanyLogos pic={companyInvesvo} />
        <CompanyLogos pic={companyCA} />
        <CompanyLogos pic={companyBozzuto} />
      </Flex>
    </Box>
  );
}

export default PartnersBar;
