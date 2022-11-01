import { TableBody, TableHead, TableRow } from "@mui/material";
import { Container, Table } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import ventasdb from "../ventas.json"
//import Admin from "./components/administrador";


export function ListaVentas() {

    const ListasVentas = ({idVenta, fecha, valor}) => (
        <tr>
          <td>{idVenta}</td>
          <td>{fecha}</td>
          <td>{valor}</td>
        </tr>
    )

    const ventas = () =>{
        return (
         <tbody>
          {
            ventasdb.map((venta) =>(
              <ListasVentas
              idVenta={venta.idVenta}
              fecha={venta.fecha}
              valor={venta.valor}
            
              /> 
            ))
          }
         </tbody>
        ) 
    }

    var total= ventasdb.reduce((sum, value) => (typeof value.valor == "number" ? sum+value.valor : sum),0);
    

    return (
        /*
        <table class="demo">
         <thead>
           <tr>
            <th scope="col">id Venta</th>
            <th scope="col">Fecha</th>
            <th scope="col">Valor</th>
           </tr>  
         </thead>
         {ventas()} 
           <tr>
            <td></td>
            <td></td>
            <td class="total">Total=${total}</td>
           </tr>  
        </table>
        */

        
      <Container component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id Venta</TableCell>
                  <TableCell align="center">Fecha</TableCell>
                  <TableCell align="center">Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ventasdb.map((venta) => (
                  <TableRow key={venta.idVenta}>
                    <TableCell align="center" component="th" scope="row">
                      {venta.idVenta}
                    </TableCell>
                    <TableCell align="center">{venta.fecha}</TableCell>
                    <TableCell align="center">{venta.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Container>
         
    )
    
}

