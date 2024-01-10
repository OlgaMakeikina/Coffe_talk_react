function Goods({goods}) {
    return (
        <div className="products">
            {goods.map(( element => {
                const {id, name, searchTerm, price, image} = element;
                return ( <div key={id} className="product-card">
                    <img src={image} width="400px" height="500px" alt="products"/>
                    <div className="product-info">
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Goods;