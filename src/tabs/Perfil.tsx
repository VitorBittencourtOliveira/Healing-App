import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";

import { Titulo } from "../componentes/Titulo";
import { Dot } from "../componentes/Dot";

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center"  p={5}>
                <Titulo color="green.500">Meu Perfil</Titulo>
                <Avatar source={{ uri: "https://github.com/VitorBittencourtOliveira.png" }} mt={5} size="2xl"/>
                <Titulo color="green.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Vitor Bittencourt Oliveira</Titulo>
                <Text fontSize="lg">25/01/2000</Text>
                <Text fontSize="lg">Valinhos - SP</Text>

                <Divider mt={5} />

                <Titulo color="green.500" mb={1}>Histórico médico</Titulo>
                <Text fontSize="md" color="gray.500" bold><Dot /> Amigdalite</Text>
                <Text fontSize="md" color="gray.500" bold><Dot /> Gastrite leve</Text>
            </VStack>
        </ScrollView>
    )
}