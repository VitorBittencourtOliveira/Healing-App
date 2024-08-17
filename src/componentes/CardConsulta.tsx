import { Avatar, Text, VStack } from "native-base";

import { Botao } from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
    alignSelf?: string;
}

export function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    foiAtendido,
    foiAgendado,
    alignSelf
}: CardProps){
    return (
        <VStack w="100%" bg={foiAtendido ? "#bbf7ee" : "white"} p={5} borderBottomRadius="lg" shadow={2} mb={5}>
            <VStack flexDir="row" alignSelf={alignSelf}>
                <Avatar source={{ uri: foto }} size="lg"/>
                <VStack pl={4}>
                    <Text fontSize="md" bold pt={1}>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={3}>
                {foiAgendado ? "Cancelar" : "Agendar consulta"}
            </Botao>
        </VStack>
    )
}