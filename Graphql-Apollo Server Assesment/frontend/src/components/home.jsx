import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
// import { INSERT_PRODUCT } from '../queries/queries';
import { useMutation } from '@apollo/client';
import INSERT_PRODUCT  from "../queries/queries";

function RegisterForm() {
  const [product_name, setproduct_name] = useState('');
  const [price, setPrice] = useState('');
  const [product_des, setProduct_des] = useState('');
  const [product_image, setProduct_image] = useState('');
  const [createProduct, { error }] = useMutation(INSERT_PRODUCT);

  const handleSubmit = (event) => {
    console.log(product_name, price, product_des, product_image);
    event.preventDefault();
    createProduct({
      variables: {
        product_name: product_name,
        price: parseInt(price),
        product_des: product_des,
        product_image: product_image, 
      },
    });
    setproduct_name('');
    setPrice('');
    setProduct_des('');
    setProduct_image('');
  };

  if (error) {
    console.log(error);
  }

  return (
    <Container className="d-flex mt-5 justify-content-center">
      <div className="col-6">
        <h2 className="text-center mb-5">Register Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={product_name}
              onChange={(e) => setproduct_name(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Product description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your description"
              value={product_des}
              onChange={(e) => setProduct_des(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="mobile">
            <Form.Label>product image</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your product image"
              value={product_image}
              onChange={(e) => setProduct_image(e.target.value)}
            />
          </Form.Group>

          <Button className="my-2" variant="primary" type="submit" block>
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default RegisterForm;
