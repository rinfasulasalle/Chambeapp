import { Fragment, useState } from 'react';

import { Login } from './Login';
import { Home  } from './Home';

function App() {
  const [user, setUser] = useState("");
  return (
    <Fragment>
      { user === ""? <Login setUser={setUser}/> : <Home/>}
    </Fragment>
  );
}

export default App;
