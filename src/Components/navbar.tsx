import React, {useState} from 'react';
import {FormProps} from '../Interfaces/Props/FormProps'
import {fetchFileList} from '../Functions/FilegateApiCalls'

export function Navbar(props: FormProps) {
    const [title, setTitle] = useState<string>("")

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onKeyPressHandler = async (event: React.KeyboardEvent) => {
        if (event.key === "Enter"){
            props.SetPlaceholder(false)
            await fetchFileList(props, title);
        }
    }

    const onButtonPressHandler = async (event: React.MouseEvent) => {
        props.SetPlaceholder(false)
        await fetchFileList(props, title);
    }

    return (
    <nav>
        <div className="nav-wrapper grey darken-2">
            <div className="row">
                <div className="col s1 l2 push-s9">
                    <a href="/" className="brand-logo">FileGate</a>
                </div> 
                <div className="col s8 l7 offset-l2 pull-s1">
                    <input value={title} type="text" id="title" placeholder="Client ID" 
                    className="center wordBreak" style={{ width: "50%" }} onChange={changeHandler}>
                    </input>
                    <button className="btn waves-effect waves-light orange darken-2" 
                    type="submit" name="action" onClick={onButtonPressHandler} onKeyPress={onKeyPressHandler}>Connect</button>
                </div>
            </div>
        </div>
      </nav>
    );
}