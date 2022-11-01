import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

export function ItemProducto({nombre, cantidad, imagen, subtotal}) {

    return (
        <ListItem secondaryAction={
            <Typography>{subtotal}</Typography>
            } >
            <ListItemAvatar>
                <Avatar src={imagen} alt={nombre} />
            </ListItemAvatar>
            <ListItemText primary={nombre} secondary={"Cantidad: " + cantidad} />
        </ListItem>
    )
}