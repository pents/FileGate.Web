import React from 'react'
import {PlaceholderProps} from '../Interfaces/Props/FormProps'

export function Placeholder(props: PlaceholderProps){

    return props.show ? (
        
        <div className="row center" style={{marginTop:"10vw"}}>
            <div className="col s12 m6 offset-m3">
            <div className="card-panel teal orange darken-3 z-depth-5">
                <h4 className="white-text">
                    Enter client Id above
                </h4>
            </div>
            </div>
        </div>
    ) : <></>
}