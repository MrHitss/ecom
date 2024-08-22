import React from "react";

const ProductSection = ({products}) => {

    return (
        <>
            {products.map((product, index) => (
                <div className="col" key={index}>
                <div className="card shadow-sm h-100">
                    <img 
                        src={product.coverImage} 
                        className="card-img-top p-3" 
                        alt={product.title} 
                        style={{ maxHeight: "300px", objectFit: "cover", borderRadius: "10px" }} 
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-truncate">{product.title}</h5>
                        <p className="card-text"> {product.genre} <br /> by {product.author}</p>
                        <div className="mt-auto">
                            <button type="button" className="btn btn-primary w-100">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default ProductSection;