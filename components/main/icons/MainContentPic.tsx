import Image from "next/image";
import image from "../../../assets/hero-header-image.png";

function MainContentPic() {
  return <>
  <Image src={image} alt='girl sitting next to printer'/>;
  </> 
}

export default MainContentPic;
