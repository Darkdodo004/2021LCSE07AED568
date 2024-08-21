import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { fetchProducts } from '../services/api';

const ProductList = ({ filters }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts(filters.company, filters.category);
            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / filters.pageSize));
        };
        loadProducts();
    }, [filters, page]);

    return (
        <>
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
            <Pagination>
                <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1} />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Next onClick={() => setPage(page + 1)} disabled={page === totalPages} />
            </Pagination>
        </>
    );
};

export default ProductList;
