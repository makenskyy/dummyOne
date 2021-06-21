import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNameAction, addPriceAction } from './index';
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
    console.log(price);
    console.log(name);
    addProduct({ price, name });
  }

  return (
    <div className="App">
      <Form onSubmit={submit} >
        <Form.Group controlId="formPrice">
          <Form.Label >Price</Form.Label>
          <Form.Control type="price" placeholder="Enter price of the product" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

    </div >
  );
}

export default App;
