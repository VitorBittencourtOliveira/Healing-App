import { Box, Image, Text } from "native-base";
import Logopng from "../assets/logo.png";

export function Logo() {
    return (
        <Box flexDir="row">
            <Image source={Logopng} alt="Logo Healing"/>
            <Text alignSelf="center" fontSize="3xl" bold color="green.500" >
            Healing
            </Text>
        </Box>
    )
}