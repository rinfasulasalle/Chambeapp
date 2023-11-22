import { Fragment, useState } from 'react';

import { Login } from './Login';
import { Home  } from './Home';

export function App() {
  const [user, setUser] = useState("");
  return (
    <Fragment>
      { user === ""? <Login setUser={setUser}/> : <Home/>}
    </Fragment>
  );
}