import { IListElement } from '../Interfaces/ListElement';
import {ApiGetCall, ApiDownload} from '../Functions/ApiGetCall'
import {FormProps} from '../Interfaces/Props/FormProps'

export async function fetchFileList (props: FormProps, clientId: string) {
    const data = await ApiGetCall<IListElement[]>("http://192.168.1.83:8095/api/File/"+clientId);
    if (data.parsedBody === undefined){
        console.log(data.error)
        // Show error
    }else{
        props.SetList(data.parsedBody)
        props.SetClientId(clientId)
    } 
}

export async function downloadFile (clientId: string, elementId: string, elementName: string){
    let res = await ApiDownload("http://192.168.1.83:8095/api/file/"+ clientId + "/" + elementId )
    let tempUrl = window.URL.createObjectURL(res)
    let tempLink = document.createElement('a');
    tempLink.href = tempUrl;
    tempLink.setAttribute('download', elementName);
    tempLink.click();
}