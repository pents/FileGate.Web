import React from 'react'
import {ListProps} from '../Interfaces/Props/ListProps'

export function List(props: ListProps){
    

    return(
        <ul>
            {props.elements.map(el => {
                return(
                    <li className="listElement hoverable grey darken-1" key={el.Id}>
                    <label>
                        <span>{el.Title}</span>
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