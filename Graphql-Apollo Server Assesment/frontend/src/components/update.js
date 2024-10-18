import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
// import { UPDATE_PRODUCT } from "../queries/queries";
// import { UPDATE_PRODUCT } from "../queries/queries";
import { useMutation } from "@apollo/client";
import UPDATE_PRODUCT from "../queries/queries";

export default function MyVerticallyCenteredModal(props) {
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [product_des, setProduct_des] = useState("");
  const [product_image, setProduct_image] = useState("");
  const [updateProduct, { error }] = useMutation(UPDATE_PRODUCT);

  useEffect(() => {
    setProduct_name(props?.data?.product_name);
    setPrice(props?.data?.price);
    setProduct_des(props?.data?.product_des);
    setProduct_image(props?.data?.product_image);
  }, [props?.data]);

  const updateTask = (event) => {
    event.preventDefault();
    updateProduct({
      variables: {
        updateProductId: props.data._id,
        product_name: product_name,
        price: price,
        product_des: product_des,
        product_image: product_image,
      },
    });
    props.onHide();
  };

  if (error) {
    console.log(error);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update the Product data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the product name"
              value={product_name}
              onChange={(e) => setProduct_name(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter the product description"
              value={product_des}
              onChange={(e) => setProduct_des(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the product image URL"
              value={product_image}
              onChange={(e) => setProduct_image(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={updateTask}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}
