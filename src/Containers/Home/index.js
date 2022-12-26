import React from "react";
import { Container, Content, Label, Input, Button, Data} from "./styles.js";

import logo from '../../assets/logo_espaco.svg'

function App() {

    return (
     
            <Container>
                <Content>
                    <img alt="Logotipo" src={logo} />


                    <Data>
                        <Label> Usuário </Label>
                        <Input/>


                        <Label>Senha</Label>
                        <Input />
                    </Data>


                    <Button> Entrar </Button>



                </Content>

            </Container>
        
    )

}

export default App