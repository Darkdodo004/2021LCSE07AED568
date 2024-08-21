import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
    return (
        <Card className="mb-3">
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <strong>Company:</strong> {product.company} <br />
                    <strong>Category:</strong> {product.category} <br />
                    <strong>Price:</strong> ${product.price} <br />
                    <strong>Rating:</strong> {product.rating} / 5 <br />
                    <strong>Discount:</strong> {product.discount}% <br />
                    <strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
