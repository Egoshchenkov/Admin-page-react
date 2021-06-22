import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes/routes'

function App(props) {

  return ( 
    <BrowserRouter>
      {routes.map((route, index) => {
        return <Route key={index} exact path={route.path} component={route.component}/>
      })}
    </BrowserRouter>
  );
}

export default App;
