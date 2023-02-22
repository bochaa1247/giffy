import React, {useEffect, useState} from 'react';
import getGifs from './services/getGifs'
import './App.css';
import ListOfGifs from './components/ListofGifs/ListofGifs';
import {Link ,Route } from "wouter";
import SearchResults from './pages/SearchResults';
import Home from './pages/Home';
import Detail from './pages/Detail';

import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import logo from './logo.png'


function App() {
 
  const [keyword, setKeyword]= useState('pandas');
  

 
  return (
      <StaticContext.Provider value={{}}>
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src={logo} />
              </figure>
            </Link>
            {/* <Route path='/Search/:keyword' component={ (params)=> <SearchResults params={params} /> }/>  */}
            <Route
                  component={SearchResults}
                  path="/search/:keyword"
                />
            <Route path='/gif/:id' component={Detail}/>
            {/* <Route path='/' component={home}/> */}
            <Route path="/">  <Home /> </Route>
          
          </GifsContextProvider>

          
        
          
        
        
        </section>
      </div>
     </StaticContext.Provider>
   
  );
}

export default App;
