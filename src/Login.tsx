import { Box, Link, Text, VStack } from "native-base"
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { Logo } from "./componentes/Logo";


export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent="center" padding={5}>
      <Box position="absolute" top={3} right={3}>
        <Ionicons name="information-circle-outline" size={30} color="#047c80" onPress={() => navigation.navigate("Info")} />
      </Box>

      <Logo />
      
      <Titulo mb={7} mt={10}>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry={true}
        />
      </Box>
      <Botao onPress={() => navigation.navigate("Tabs")}>
        Entrar
      </Botao>
      <Link mt={4}>
        <Text fontSize="md" underline color="green.800">
          Esqueceu sua senha?
        </Text>
      </Link>
      <Box width="100%" flexDirection="row"  justifyContent="center" mt={10}>
        <Text fontSize="md">
          Ainda não tem cadastro?
        </Text>
        <Text>  </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color="green.500" fontSize="md">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
