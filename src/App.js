import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from './store/productReducer';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { InputGroup, FormControl, Table, Form, Button } from 'react-bootstrap'

function App() {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);

  const addProduct = (product) => {
    dispatch(addProductAction(product));
  }

  const submit = (e) => {
    e.preventDefault();
    addProduct({ price, name });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <Form className="text-center" style={{ width: "25rem" }} onSubmit={submit} >
          <Form.Group controlId="formPrice">
            <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>Price</Form.Label>
            <Form.Control type="price" placeholder="Enter price of the product" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Button style={{ marginBottom: "2rem" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Table striped bordered hover style={{ width: "25rem" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {products.length > 0 ?
            <>
              {products.map(product => {
                return (
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                )
              })}
            </>
            : null
          }
        </Table>

      </div>
    </div >
  );
}

export default App;
