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
    document.getElementsByTagName("input")[1].checked = false;
  }

  async function checkForExisting(e: string){
    let db = await fetch('http://localhost:3000/data');
    let data = await db.json();
    let i = 0;
    let b = false;
    while (i < data.length && !b) {
      if(data[i].email == e){
        b = true;
      }
      i++;
    }
    return b;
  }

  async function insertFunc(e: FormEvent){
    e.preventDefault();
    let adatok = getInsert();
    console.log(adatok);

    let chck = document.getElementsByTagName("input")[1].checked;
  
    if(chck){
      if(await checkForExisting(adatok[0])){
        window.alert("Ez az email már regisztrálva van!");
      }
      else{
        document.getElementById("not-checked")!.textContent = "";
        clearInputs();
        const datas = {
          "email": adatok[0]
        }
      
        const response = await fetch('http://localhost:3000/data', {
          method: 'POST',
          body: JSON.stringify(datas),
          headers: {
            'Content-type': 'application/json'
          },
        });
        
        window.alert("Sikeres regisztráció");

        const data = await response.json();
        console.log(data);
      }
    }
    else{
      document.getElementById("not-checked")!.textContent = "Kérlek ezt nyomd meg a regisztációhoz";
      document.getElementById("not-checked")!.style.color = "red";
    }
  }

  return (
    <Form onSubmit={insertFunc} method='post'>
      <Form.Group className="formgroup" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="pelda@email.hu" />
      </Form.Group>
      
      <Form.Group className="formgroup" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Feliratkozok a hírlevélre" />
      </Form.Group>
      <p id='not-checked'></p>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FooterForm;