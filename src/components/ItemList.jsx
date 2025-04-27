import ItemForList from './ItemForList'
import { codeColors, aMayuscula } from '../helpers/codigos'
const ItemList = ({ productos, titulo }) => {
    return (
        <>
            {/* Se puede hacer con CSS o con JS, aqui con JS 
            <h1 style={{ color: codeColors[titulo] }}>{aMayuscula(titulo)}</h1>
             */}
            {/*   Se puede hacer con CSS o con JS, aqui con CSS */}
            <h1 style={{ color: codeColors[titulo] }}>{titulo}</h1>
            <div className="products-container">
                {
                    productos &&
                    productos.map((producto) => {
                        return (
                            <ItemForList producto={producto} key={producto.id} />
                        )
                    })
                }
            </div >
        </>
    )
}

export default ItemList;