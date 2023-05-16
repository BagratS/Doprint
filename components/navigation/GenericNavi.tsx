import { Button } from "@chakra-ui/react";
import MenutItemList from "./MenuItemList";
import Link from "next/link";

function GenericNavi() {
  return (
    <>
      <MenutItemList
        name="About"
        items={["Who we are", "our values", "Careers", "Press"]}
      />
      <Button>Locations</Button>
      <MenutItemList
        name="Resources"
        items={["Activity center", "case studies", "Blog"]}
      />
      <MenutItemList
        name="Help Center"
        items={["Visit Help Center", "Contact Live Support"]}
      />
      <Button>MyAccount</Button>
      <Link href='/print-now'>
        <Button background="rgb(5, 166, 190)">Print Now</Button>
      </Link>
      <MenutItemList
        name="Become a Partner"
        items={[
          "Multifamily apartments",
          "Coffee Shop",
          "Coworking spaces",
          "Student Housing",
          "Hotels & Lodging",
          "DMV locations",
        ]}
        color="rgb(5, 166, 190)"
      />
    </>
  );
}

export default GenericNavi;
