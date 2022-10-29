import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export function Login() {

    const navegar = useNavigate()

    const estadoInicialFormLogin = {
        user: "",
        password: ""
    };

    const [formLogin, setFormLogin] = useState(estadoInicialFormLogin)
    

    const handleChange = (evento, campo) => {
        const valor = evento.target.value;
        console.log(valor);
        setFormLogin({
            ...formLogin,
            [campo]: valor
        })
        console.log(formLogin);
    }
    
    const handleSubmit = (evento, credenciales) => {
        evento.preventDefault();
        if(credenciales.user === "admin" && credenciales.password === "12345"){
            localStorage.setItem("rol", "administrador");
            navegar("/");
        }
        else{
            swal("error", "El usuario o la contraseña son incorrectos", "error")

        }
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control value={formLogin.user} onChange={(event) => handleChange(event, "user")} type="text" placeholder="Ingresa el Usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control value={formLogin.password} onChange={(event) => handleChange(event, "password")} type="password" placeholder="Ingrese la Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <Button onClick={(event) => handleSubmit(event, formLogin)} variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </Container>
    )
}