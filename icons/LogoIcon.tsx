import Image from 'next/image'
import logo from '../assets/pwm_logo_med.png'


function LogoIcon () {
    return (<Image width='114' height='95' src={logo} alt='Print With Me logo'/>)
}

export default LogoIcon