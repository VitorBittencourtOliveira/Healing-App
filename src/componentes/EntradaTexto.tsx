import { Input, FormControl, Text } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

export function EntradaTexto ({ 
  label, 
  placeholder, 
  secureTextEntry = false
} : InputProps) : JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label><Text bold color="green.800" fontSize="md">{label}</Text></FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        width="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
      />
    </FormControl>
  );
};