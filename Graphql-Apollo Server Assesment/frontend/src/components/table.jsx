import React from 'react';
import { useEffect, useState } from 'react';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './update';
import { useQuery, useMutation } from '@apollo/client';
import LOAD_DATAS from "../queries/queries";
import  DELETE_PRODUCT  from "../queries/queries"

const UserTable = () => {
  const { error, data } = useQuery(LOAD_DATAS);
  const [deleteProduct, { error: deleteError }] = useMutation(DELETE_PRODUCT);
  const [modalShow, setModalShow] = useState(false);
  const [productdata, setProductdata] = useState({});
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    if (data) {
      setLoadedData(data.getAllProducts);
    }
  }, [data, modalShow]);

  const updateTask = (product) => {
    setModalShow(true);
    setProductdata(product);
  };

  const confirm = (product) => {
    if (window.confirm('Do you want to delete this?')) {
      deleteProduct({
        variables: {
          deleteProductId: product._id,
        },
      });
      alert('Deleted');
    }
  };

  if (error) {
    console.log(error);
  }

  if (deleteError) {
    console.log(deleteError);
  }

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div className="col-8">
        <h2 className="text-center mb-5">Product Details</h2>

        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">
                Product Name
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Product Description
              </th>
              <th scope="col" className="text-center">
                Product Image
              </th>
              <th scope="col" className="text-center">
                Edit
              </th>
              <th scope="col" className="text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {loadedData.map((product, index) => (
              <tr key={index}>
                <td className="text-center">{product.product_name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center">{product.product_des}</td>
                <td className="text-center">{product.product_image}</td>
                <td className="text-center">
                  <Button
                    onClick={() => updateTask(product)}
                    style={{
                      border: 'none',
                      borderRadius: '3px',
                      backgroundColor: 'blue',
                      color: 'white',
                    }}
                  >
                    <PencilSquare />
                  </Button>
                </td>
                <td className="text-center">
                  <Button
                    onClick={() => confirm(product)}
                    style={{
                      border: 'none',
                      borderRadius: '3px',
                      backgroundColor: 'blue',
                      color: 'white',
                    }}
                  >
                    <Trash3 />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={productdata}
      />
    </Container>
  );
};

export default UserTable;
