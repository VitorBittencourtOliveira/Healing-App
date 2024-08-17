import { VStack, Box, ScrollView, Text, Divider } from "native-base";

import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { depoimentos } from "../utils/mock";
import { Logo } from "../componentes/Logo";


export default function Principal() {

    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Logo />
                <Titulo color="green.500">Boas-vindas!</Titulo>

                <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
                    <EntradaTexto
                        placeholder="Digite a especialidade"
                    />
                    <EntradaTexto
                        placeholder="Digite sua localização"
                    />
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>

                <Titulo color="green.800" alignSelf="center" mt={10}>Depoimentos</Titulo>
                <VStack space={3} divider={<Divider />} w="100%">
                    {depoimentos.map(depoimento => (
                        <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                            <Text color="gray.300" fontSize="md" textAlign="justify">
                                {depoimento.text}
                            </Text>
                            <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{depoimento.titulo}</Text>
                        </Box>
                    ))}
                </VStack>
            </VStack>
        </ScrollView>
    );
}