import { useState, useEffect } from 'react'
import { pedirUnico } from '../helpers/pedirDatos'
import Item from './Unico'
import { useParams } from 'react-router-dom'

const ItemDetails = () => {

    const [item, setItem] = useState(null)
    const itemId = Number(useParams().itemId)

    useEffect(() => {
        pedirUnico(itemId)
            .then((res) => { setItem(res) })
    }, [itemId])

    return (
        <div>
            <h1>Detalle del producto</h1>
            {item &&
                <Item producto={item} />
            }
        </div>
    )
}

export default ItemDetails