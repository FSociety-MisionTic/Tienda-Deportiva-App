import { createContext, useContext, useEffect, useState } from "react";

const ContextoCarroCompras = createContext();

export function useContextoCarroCompras() {
    return useContext(ContextoCarroCompras);
}

export function ProviderCarroCompras({ children }) {

    let carroComprasInicial = JSON.parse(localStorage.getItem("carro_compras") || null) || [];


    const [carroCompras, setCarroCompras] = useState(carroComprasInicial)
    console.log(carroCompras);
    const getContadorProducto = (id) => {
        const productosPorId = carroCompras.find((item) => id === item.id);
        if (productosPorId) return productosPorId.cantidad || 0;
        else return 0;
    }

    const getTotalProductos = () => {
        let total = 0;
        carroCompras.map((item) => {
            total += item.cantidad;
        })
        return total;
    }

    const agregarProductoCarrito = (id, nombre, imagen, precio) => {
        console.log("id:", id);

        const producto = carroCompras.find((elemento) => {
            if (id === elemento.id) return elemento;
            else return null;
        });
        if (producto) {
            const nuevoCarroCompras = carroCompras.map((item) => {
                if (id === item.id) {
                    return { ...item, cantidad: item.cantidad + 1, subtotal: item.subtotal + precio }
                }
                else return item;
            });
            setCarroCompras(nuevoCarroCompras);
        }
        else {
            setCarroCompras([...carroCompras, { id: id, nombre, imagen, cantidad: 1, subtotal: 1 * precio }]);
        }

    }

    const quitarProductoCarrito = (id) => {

        const producto = carroCompras.find((elemento) => {
            if (id === elemento.id) return elemento;
            else return null;
        });
        if (producto.cantidad === 1) {
            const nuevoCarroCompras = carroCompras.filter((item) => id !== item.id);
            setCarroCompras(nuevoCarroCompras);
        }
        else {
            const nuevoCarroCompras = carroCompras.map((item) => {
                if (id === item.id) {
                    return { ...item, cantidad: item.cantidad - 1 }
                }
                else return item;
            });
            setCarroCompras(nuevoCarroCompras);
        }
    }

    const eliminarCompraProducto = (id) => {
        const nuevoCarroCompras = carroCompras.filter((item) => id !== item.id);
        setCarroCompras(nuevoCarroCompras);

    }


    useEffect(() => {
        localStorage.setItem("carro_compras", JSON.stringify(carroCompras));
    }, [carroCompras]);

    return (
        <ContextoCarroCompras.Provider value={{
            carroCompras,
            getContadorProducto,
            agregarProductoCarrito,
            quitarProductoCarrito,
            getTotalProductos,
            eliminarCompraProducto
        }}>

            {children}

        </ContextoCarroCompras.Provider>
    )
}