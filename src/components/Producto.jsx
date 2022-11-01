import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContextoCarroCompras } from "../contexts/ContextoCarroCompras";

export function Producto({ id, nombre, descripcion, urlImagen, caracteristicas, precio }) {
    const rol = localStorage.getItem("rol");
    
    const contexto = useContextoCarroCompras();

    const cantidad = contexto.getContadorProducto(id);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={urlImagen}
                alt="card_producto"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {precio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    (rol === "administrador") ? (
                        <>
                            <Button size="small">Modificar</Button>
                            <Button size="small">Eliminar</Button>
                        </>
                    ) : (
                        (cantidad == 0) ? (
                            <Button onClick={() => contexto.agregarProductoCarrito(id, nombre, urlImagen, precio)} size="small">Comprar</Button>
                        ) : (
                            <>
                                <IconButton onClick={() => contexto.quitarProductoCarrito(id)} >
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div>
                                    {cantidad}
                                </div>
                                <IconButton onClick={() => contexto.agregarProductoCarrito(id, nombre, urlImagen, precio)} >
                                    <AddCircleOutlineIcon />
                                </IconButton>

                                <IconButton onClick={() => contexto.eliminarCompraProducto(id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )
                    )
                }

            </CardActions>
        </Card>
    )
}