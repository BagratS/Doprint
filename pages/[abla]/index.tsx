import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';

function Abla() {
    const router = useRouter();

    const urlPath = router.query.abla;

    return <Text fontSize='25'>blabla {urlPath}</Text>
}

export default Abla;