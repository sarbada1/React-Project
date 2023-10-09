import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() { // Updated function name to start with uppercase letter
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uni = ids.slice(0, 8);

    let a = name,
      b = age;
    array.push({ id: uni, name: a, age: b });
    history('/');
  };

  return (
    <>
      <Form
        className="d-grid gap-2"
        style={{ margin: '15rem' }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Enter Age"
            required
          />
        </Form.Group>

        <Button
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>

        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </>
  );
}

export default Create; // Updated export name as well
