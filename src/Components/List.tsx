import React from 'react'
import {ListProps} from '../Interfaces/Props/ListProps'
import { IListElement } from '../Interfaces/ListElement'
import { downloadFile } from '../Functions/FilegateApiCalls'

export function List(props: ListProps){
    if (props.elements.length > 0){

        const onDownload = async (event: React.MouseEvent, element: IListElement)=> {
            await downloadFile(props.clientId, element.id, element.fullName)
        }
        return(
            <ul>
                {props.elements.map((el, index) => {
                    return(
                        <li key={index}>
                            <div className="row">
                                <div className="col s12 m12">
                                <  div className="card grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title wordBreak">{el.fullName}</span>
                                        <p>{el.size} bytes</p>
                                    </div>
                                    <div className="card-action grey darken-2">
                                        <button className="waves-effect waves-light btn-small orange darken-2" onClick={(event) => onDownload(event, el)}>
                                            <i className="material-icons left">cloud_download</i>
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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