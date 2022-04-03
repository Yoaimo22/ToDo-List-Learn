 import { Link } from '@chakra-ui/react'
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLinkIcon } from '@chakra-ui/icons'
 import {
  Box,
  Flex,

  useColorModeValue,

 
} from "@chakra-ui/react";

const Navbar = () => {
    return(
 <Box bg={useColorModeValue("black.600", "blue.900")} px={10}>
        <Flex h={70} alignItems={"center"} justifyContent={"space-between"}>
          <Box> WhatsApp
          <Link href='https://bit.ly/3j2lxXY'>
 <BsWhatsapp/>  
</Link>
 </Box>
 
  <Flex alignItems={"center"} >
          <Box> TikTok
 <Link href='https://www.tiktok.com/@pesmobile_exe' >
 <FaTiktok/> 
</Link>
</Box>
  </Flex>

<Flex alignItems={"right"}>
           
<Box> Github
<Link href='https://github.com/yoaimo22' w={100}>
<AiFillGithub/> 

</Link>
</Box>
        </Flex>
      </Flex>
      </Box>
    )
};

export default Navbar;