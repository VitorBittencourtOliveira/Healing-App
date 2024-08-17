import { Box, Checkbox, ScrollView, Text, View } from "native-base"
import React, { useState } from "react";

import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { secoes } from "./utils/CadastroEntradaTexto";
import { Logo } from "./componentes/Logo";

export default function Cadastro() {
  
  const [numSecao, setNumSecao] = useState(0)

  function avançarSecao() {
    if(numSecao < secoes.length - 1) {
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao() {
    if(numSecao > 0) {
      setNumSecao(numSecao-1)
    }
  }

  return (
    <ScrollView flex={1} padding={5}>
      <View alignItems={"center"}>
        <Logo />
      </View>
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>
      <Box>
        {numSecao == 2 && <Text color="green.800" bold fontSize="md" mt={2} mb={1}>
          Selecione o plano:
        </Text>}
        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox value={checkbox.value} colorScheme="green" key={checkbox.id} >
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">
        Voltar
      </Botao>}
      <Botao onPress={() => avançarSecao()} mt={4}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
