import { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FooterForm() {

  function getInsert(){
    let items = [];
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length-1; i++) {
      items.push(inputs[i].value);   
    }
    return items;
  }

  function clearInputs() {
    let e = document.body.getElementsByTagName("input");
    for (let i = 0; i < e.length-1; i++) {
      e[i].value = "";
    }
    document.getElementsByTagName("input")[2].checked = false;
  }

  async function insertFunc(e: FormEvent){
    e.preventDefault();
    let adatok = getInsert();
    console.log(adatok);

    let chck = document.getElementsByTagName("input")[2].checked;
  
    if(chck){
      document.getElementById("not-checked")!.textContent = "";
      clearInputs();
      const datas = {
        "email": adatok[0],
        "password": adatok[1]
      }
    
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        body: JSON.stringify(datas),
        headers: {
          'Content-type': 'application/json'
        },
      });
    
      const data = await response.json();
      console.log(data);
      
    }
    else{
      document.getElementById("not-checked")!.textContent = "Kérlek ezt nyomd meg a regisztációhoz";
      document.getElementById("not-checked")!.style.color = "red";
    }
  }

  return (
    <Form onSubmit={insertFunc} method='post'>
      <Form.Group className="formgroup" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="formgroup" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="formgroup" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p id='not-checked'></p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FooterForm;