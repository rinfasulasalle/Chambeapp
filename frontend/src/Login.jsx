import { Form, Button, FloatingLabel } from 'react-bootstrap';
import logo from './resources/img/chambea-logo.png';
import { useEffect } from 'react';
export function Login(){
  useEffect(() => {
    document.title="Chambea - Login";
  });

  return (
  <main class="form-signin">
    <form>
      <img class="mb-4" src={logo} alt="" width="72" height="57"/>
      <h1 class="h3 mb-3 fw-normal">Chambea App</h1>
      
      
      <FloatingLabel controlId='emailInput' label='Email address'>
        <Form.Control type='email' name='email' placeholder='user@mail.com' />
      </FloatingLabel>

      <FloatingLabel controlId='passwordInput' label='Password'>
        <Form.Control type='password' name='password' placeholder='Password'/>
      </FloatingLabel>

      <Form.Check inline className='mb-3' label='Remember me' type='checkbox' id='checkboxInput' />

      <Button className="w-100 btn-lg" type="submit"> Sign in </Button>

      <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
    </form>
  </main>
  );
}