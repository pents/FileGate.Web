import React, { useState } from 'react';
import {Navbar} from './Components/navbar'
import {List} from './Components/List'
import { IListElement } from './Interfaces/ListElement';
import {Footer} from './Components/Footer'

function App() {

  const [list, setList] = useState<IListElement[]>([])
  
  const addHandler = (title: string) => {
    const newListElement: IListElement = {
      Title: title,
      Id: Date.now()
    }
    setList(prev => [newListElement, ...prev])
  }


  return (
    <div id='root' className="grey darken-4">
      <Navbar OnAdd={addHandler}/>
      <div className="container mainContainer">
        <List {...{elements: list}}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
