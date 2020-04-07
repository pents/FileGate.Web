import React from 'react'
import {ListProps} from '../Interfaces/Props/ListProps'

export function List(props: ListProps){
    if (props.elements.length > 0){

        return(
            <ul>
                {props.elements.map((el, index) => {
                    return(
                        <li className="listElement hoverable grey darken-1" key={index}>
                        <label>
                            <span>{el.FullName}</span>
                            <span>{el.Size}</span>
                            <span>{el.Id}</span>
                            <button className="btn waves-effect waves-light blue darken-1" type="submit" name="action">
                                Download
                            </button>
                        </label>
                    </li>
                    )
                })}
            </ul>
        )
    }
    else{
        return(
            <ul>
            </ul>
        )
    }

}