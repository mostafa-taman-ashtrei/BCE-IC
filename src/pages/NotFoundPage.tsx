import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Alert
        status='error'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='100vh'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Page Not Found
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          The page you are looking for does not exist
        </AlertDescription>
      </Alert>
    </>
  )
}

export default NotFoundPage;