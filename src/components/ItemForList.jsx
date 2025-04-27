
import { Link } from 'react-router-dom'
import { codeColors } from '../helpers/codigos'

function ItemForList({ producto }) {
    return (
        <div className="card-forlist">
            <h2 className="title-product">{producto.title}</h2>
            <h5 className="category-product"
                style={{ backgroundColor: codeColors[producto.category] || '#bdc3c7' }}>
                <Link to={`/category/${producto.category}`}>{producto.category}</Link>
            </h5>
            <img className="img-product" src={producto.thumbnail} alt={producto.title} />
            <h3 className="price-product">${producto.price}</h3>
            <Link className="btn-product" to={`/item/${producto.id}`}>Mas Info</Link>
        </div>
    )
}

export default ItemForList