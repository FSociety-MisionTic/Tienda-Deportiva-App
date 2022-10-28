
import { Col, Container, Row } from "react-bootstrap";
import { Producto } from "../components/Producto";
import { useState, useEffect } from "react";


export function ListaProductos() {

    const [productos, setProductos] = useState([{}])
    
    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch("https://my-json-server.typicode.com/juanserdp/productos/productos");
                const productos = await response.json();
                setProductos(productos);
            } catch (error) {
                console.error(error);
            }
        }
        getProductos();
    }, [])

    return (
        <Container className="mt-3">
            <Row className="mb-3">
                {
                    productos.map((product, index) => {
                        return (
                            <Col key={index} md="4" className="d-flex justify-content-center mb-3">
                                <Producto
                                    id={1}
                                    nombre={product.nombre}
                                    descripcion={product.descripcion}
                                    urlImagen={product.urlImagen}
                                    caracteristicas={product.caracteristicas}
                                    precio={product.precio}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>)
}