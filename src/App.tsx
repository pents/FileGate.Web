import React, { useState } from 'react';
import {Navbar} from './Components/navbar'
import {List} from './Components/List'
import { IListElement } from './Interfaces/ListElement';
import {Footer} from './Components/Footer'

function App() {

  const [list, setList] = useState<IListElement[]>([])
  const [clientId, setClientId] = useState<string>("")
  
  const listhandler = (object: IListElement[]) => {
    setList(object)
  }

  const clientSetter = (id: string) => {
    setClientId(id)
  }

  return (
    <div id='root' className="grey darken-4">
      <Navbar SetList={listhandler} SetClientId={clientSetter}/>
      <div className="container mainContainer">
        <List elements={list} clientId={clientId}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
