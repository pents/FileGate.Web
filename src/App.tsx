import React, { useState } from 'react';
import {Navbar} from './Components/navbar'
import {Placeholder} from './Components/DefaultPlaceholder'
import {List} from './Components/List'
import { IListElement } from './Interfaces/ListElement';
import {Footer} from './Components/Footer'

function App() {

  const [list, setList] = useState<IListElement[]>([])
  const [clientId, setClientId] = useState<string>("")
  const [showPlaceholder, setPlaceholder] = useState<boolean>(true)
  
  const listhandler = (object: IListElement[]) => {
    setList(object)
  }

  const clientSetter = (id: string) => {
    setClientId(id)
  }

  const placeholderSet = (toggle: boolean) =>{
    console.log(toggle)
    setPlaceholder(toggle)
  }

  return (
    <div id='root' className="grey darken-4">
      <Navbar SetList={listhandler} SetClientId={clientSetter} SetPlaceholder={placeholderSet}/>
      <div className="container mainContainer">
        <Placeholder show={showPlaceholder}/>
        <List elements={list} clientId={clientId}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
