import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ItemProducto } from "../components/ItemProducto";
import { useContextoCarroCompras } from "../contexts/ContextoCarroCompras";
import Divider from '@mui/material/Divider';

export function CarritoCompras() {

    const contexto = useContextoCarroCompras();

    const listaProductos = contexto.carroCompras;

    const getTotal = () => {
        let total = 0;
        listaProductos.map((elemento) => {
            total += elemento.subtotal;
        })
        return total;
    }

    return (
        <Container>
            <Row>
                <Col md="9">
                    <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                        {
                            listaProductos.map((item, index) => {
                                console.log(item);
                                return (
                                    <>
                                    <ItemProducto
                                        key={item.id}
                                        nombre={item.nombre}
                                        cantidad={item.cantidad}
                                        imagen={item.imagen}
                                        subtotal={item.subtotal}
                                    />
                                    <Divider variant="inset" component="li" />
                                    </>
                                )
                            })
                        }
                    </List>
                </Col>
                <Col md="3">
                    <Row>
                        <h2>Total:{getTotal()}</h2>
                    </Row>
                    <Row>
                        <Col>
                        <Button>Comprar</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}