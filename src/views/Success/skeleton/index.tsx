import Box from "@/components/Box";
import { Skeleton } from "@chakra-ui/react";

const SuccessSkeleton = () => {
  return (
    <Box
      wid="100%"
      maxWid={1000}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      marginTop={40}
    >
      <Box wid="100%" justifyContent="space-between" marginBottom={15}>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Skeleton width="100%" height={10} />
        </Box>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        ></Box>
      </Box>
      <Box wid="100%" justifyContent="space-between" marginBottom={15}>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        ></Box>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        ></Box>
      </Box>
      <Box wid="100%" justifyContent="space-between" marginBottom={15}>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        ></Box>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        ></Box>
      </Box>
      <Box wid="100%" justifyContent="space-between" marginBottom={15}>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        ></Box>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        ></Box>
      </Box>
      <Box wid="100%" justifyContent="space-between" marginBottom={15}>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        ></Box>
        <Box
          wid="50%"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        ></Box>
      </Box>
    </Box>
  );
};

export default SuccessSkeleton;
