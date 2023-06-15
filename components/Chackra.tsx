import React from 'react'

import { ChakraBaseProvider } from '@chakra-ui/react'

function Chackra( {children}:{children: React.ReactNode}) {
    return (
        <ChakraBaseProvider>
            {children}
        </ChakraBaseProvider>
    )
}

export default Chackra