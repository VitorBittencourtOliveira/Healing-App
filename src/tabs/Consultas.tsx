import { Divider, ScrollView, Text, VStack } from "native-base";

import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consultas(){
    return(
        <ScrollView p={5}>
            <Titulo color="green.500">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color="green.500" fontSize="lg" alignSelf="flex-start" mb={5}>Próximas consultas</Titulo>
            <CardConsulta 
            nome="Dr. Vitor"
            especialidade="Cardiologista"
            foto="https://github.com/VitorBittencourtOliveira.png"
            data="15/12/2024"
            foiAgendado
            />

            <Divider mt={5} />

            <Titulo color="green.500" fontSize="lg" alignSelf="flex-start" mb={5}>Consultas passadas</Titulo>
            <CardConsulta 
            nome="Dr. Vitor"
            especialidade="Cardiologista"
            foto="https://github.com/VitorBittencourtOliveira.png"
            data="10/06/2024"
            foiAtendido
            />
            <CardConsulta 
            nome="Dr. Vitor"
            especialidade="Cardiologista"
            foto="https://github.com/VitorBittencourtOliveira.png"
            data="30/04/2024"
            foiAtendido
            />
            <CardConsulta 
            nome="Dr. Vitor"
            especialidade="Cardiologista"
            foto="https://github.com/VitorBittencourtOliveira.png"
            data="15/02/2024"
            foiAtendido
            />
        </ScrollView>
    )
}