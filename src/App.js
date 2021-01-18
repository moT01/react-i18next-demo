import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Page2 from './Page2';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/page2' component={Page2}/>
      </Switch>
    </div>
  );
}

export default App;
