import React, {useState} from 'react';
import {FormProps} from '../Interfaces/Props/FormProps'
import { IListElement } from '../Interfaces/ListElement';
import {ApiGetCall} from '../Functions/ApiGetCall'

export function Navbar(props: FormProps) {
    const [title, setTitle] = useState<string>("")

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onButtonPressHandler = async (event: React.MouseEvent) => {
        const data = await ApiGetCall<IListElement[]>("http://192.168.1.83:8095/api/File/"+title);
        if (data.parsedBody === undefined){
            console.log(data.error)
            // Show error
        }else{
            props.OnAdd(data.parsedBody)
        }         
    }

    return (
    <nav>
        <div className="nav-wrapper grey darken-2">
            <div className="row">
                <div className="col s1 l2 push-s9">
                    <a href="/" className="brand-logo">FileGate</a>
                </div> 
                <div className="col s8 l7 offset-l2">
                    <input value={title} type="text" id="title" placeholder="Client connection ID" 
                    className="center" style={{ width: "50%" }} onChange={changeHandler}>
                    </input>
                    <button className="btn waves-effect waves-light blue darken-1" type="submit" name="action" onClick={onButtonPressHandler}>Connect</button>
                </div>
            </div>
        </div>
      </nav>
    );
}