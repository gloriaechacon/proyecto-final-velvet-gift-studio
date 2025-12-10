export const Item = ({ name, price, description, imageUrl, children, isDetail = false }) => {

    return (
        <article className={`product-card ${isDetail ? 'product-card-detail' : ''}`}>
            <div className={isDetail ? 'product-image-container' : ''}>
                <img src={imageUrl} alt={name} />
            </div>
            <h2 className="product-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            {children}
        </article>
    )
}