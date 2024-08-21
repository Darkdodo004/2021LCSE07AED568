import React from 'react';
import { Card } from 'react-bootstrap';

const ProductDetail = ({ product }) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <strong>Company:</strong> {product.company} <br />
                    <strong>Category:</strong> {product.category} <br />
                    <strong>Price:</strong> ${product.price} <br />
                    <strong>Rating:</strong> {product.rating} / 5 <br />
                    <strong>Discount:</strong> {product.discount}% <br />
                    <strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'} <br />
                    <strong>Description:</strong> {product.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductDetail;
