import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const category = useParams().category;

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (category) {
                    setProductos(res.products.filter((item) => item.category === category))
                    setTitulo(category)
                } else {
                    setProductos(res.products)
                    setTitulo("Productos")
                }
            })
    }, [category, titulo])

    return (
        <ItemList productos={productos} titulo={titulo} />
    )
}

export default ItemListContainer