import Image from "next/image";

function CompanyLogos (props: any) {
    return <Image src={props.pic} width='120' alt='partners logos'/>
}

export default CompanyLogos;