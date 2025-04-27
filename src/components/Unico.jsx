
import { codeColors } from '../helpers/codigos'
import ItemCount from './partials/ItemCount'

function Item({ producto }) {
    return (
        <div className="card-product">
            <h2 className="title-product">{producto.title}</h2>
            <div className="container-imagenes">
                <img className="img-product" src={producto.thumbnail} alt={producto.title} />
                {producto.images.length > 1 &&
                    <div className="div-thumbs">
                        {producto.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail"
                            />
                        ))}
                    </div>
                }
            </div>
            <p className="description-product">{producto.description}</p>
            <h3 className="price-product">${producto.price}</h3>
            <h5 className="category-product"
                style={{ backgroundColor: codeColors[producto.category] || '#bdc3c7' }}
            >{producto.category}</h5>
            <div className="container-comprar">
                <ItemCount producto={producto} />
            </div>
        </div>
    )
}

export default Item