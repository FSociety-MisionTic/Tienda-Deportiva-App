import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export function Producto({ id, nombre, descripcion, urlImagen, caracteristicas, precio }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={urlImagen}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
                <Button size="small">Modificar</Button>
                <Button size="small">Eliminar</Button>
            </CardActions>
        </Card>
    )
}