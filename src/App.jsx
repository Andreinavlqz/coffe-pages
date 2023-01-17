import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import './componens/Navbar/Navbar'

import AboutPage from './componens/aboutPage/AboutPage'
import Menu from './componens/menu/menu.jsx';

const App = () => {
  return (
    <BrowserRouter>     <Route path="/aboutPage.jsx" component={AboutPage} />
<Route path="/menu.jsx" component={Menu} />
{/*<Route path='/gallery.jsx' component={Gallery} />
<Route path='/location.jsx' component={Location} />*/}
      
</BrowserRouter>
  );
}


export default App
