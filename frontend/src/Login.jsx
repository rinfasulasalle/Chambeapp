import { Form, Button, FloatingLabel } from 'react-bootstrap';
import logo from './resources/img/chambea-logo.png';
import { useEffect, useState } from 'react';

import './Login.css';

export function Login( {setUser} ){
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  useEffect(()=> {
    document.getElementById('root').className = 'text-center root';
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(email);
  };

  return (
  <main className="form-signin">
    <form onSubmit={handleSubmit}>
      <img className="mb-4" src={logo} alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Chambea App</h1>
      
      
      <FloatingLabel controlId='emailInput' label='Email address'>
        <Form.Control type='email' name='email' placeholder='user@mail.com' onChange={e => setEmail(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId='passwordInput' label='Password'>
        <Form.Control type='password' name='password' placeholder='Password' onChange={e => setPasswd(e.target.value)}/>
      </FloatingLabel>

      <Form.Check inline className='mb-3' label='Remember me' type='checkbox' id='checkboxInput' />

      <Button className="w-100 btn-lg" type="submit"> Sign in </Button>

      <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
    </form>
  </main>
  );
}