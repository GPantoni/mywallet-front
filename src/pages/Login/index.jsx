import Logo from "../../assets/img/logo.svg";
import { Container, Input, Button, Span, Form } from "../../components/LoginNRegisterComponents";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()
  
  return (
    <Container>
      <img src={Logo} alt="logo.svg" />
      <Form>
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
        <Button>Entrar</Button>
      </Form>
      <Span onClick={() => navigate('/register')}>Primeira vez? Cadastre-se!</Span>
    </Container>
  );
}
