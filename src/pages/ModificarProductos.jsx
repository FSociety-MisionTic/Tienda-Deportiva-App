import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Producto, } from "../components/modificarProducto";


export function ModificarProductos(){

    const [productos, setProductos] = useState([{}])
    
    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const productos = await response.json();
                setProductos(productos);
            } catch (error) {
                console.error(error);
            }
        }
        getProductos();
    }, [])

    return(
        <Container className="mt-3">
            <Row className="mb-3">
                {
                    productos.map((product, index) => {
                        console.log("producto:", product.id);
                        return (
                            <Col key={index} md="4" className="d-flex justify-content-center mb-3">
                                <Producto
                                    id={product.id}
                                    nombre={product.title}
                                    descripcion={product.description}
                                    urlImagen={product.image}
                                    caracteristicas={null}
                                    precio={product.price}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>)
}