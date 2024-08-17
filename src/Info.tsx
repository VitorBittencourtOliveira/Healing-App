import { Avatar, Box, Divider, ScrollView, Text, VStack, Link } from "native-base";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity, Linking } from "react-native";

import { Titulo } from "./componentes/Titulo";

export default function Info(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center"  p={5}>
                <Titulo color="green.500">Vitor Bittencourt Oliveira</Titulo>
                <Divider />
                <Avatar source={{ uri: "https://github.com/VitorBittencourtOliveira.png" }} mt={5} size="2xl"/>
                <Titulo color="green.500">Engenheiro de Software</Titulo>
                <Divider mb={5}/>
                    <TouchableOpacity onPress={ () => {Linking.openURL('https://www.linkedin.com/in/vitorbittencourtoliveira/')} }>
                        <Box flexDirection="row" alignItems="center">
                            <FontAwesome6 name="linkedin-in" size={24} color="gray" />
                            <Text fontSize="lg" color="gray.500"> vitorbittencourtoliveira</Text>
                        </Box>
                    </TouchableOpacity>
                    <Box mt={3} mb={3}>
                        <TouchableOpacity onPress={ () => {Linking.openURL('https://github.com/VitorBittencourtOliveira')} }>
                            <Box flexDirection="row" alignItems="center">
                                <FontAwesome6 name="github" size={24} color="gray" />
                                <Text fontSize="lg" color="gray.500"> VitorBittencourtOliveira</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <TouchableOpacity onPress={ () => {Linking.openURL('mailto:vitortte@outlook.com')} }>
                        <Box flexDirection="row" alignItems="center">
                        <FontAwesome6 name="envelope" size={24} color="gray" />
                        <Text fontSize="lg" color="gray.500"> vitortte@outlook.com</Text>
                        </Box>
                    </TouchableOpacity>
            </VStack>
        </ScrollView>
    )
}