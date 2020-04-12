import { IListElement } from "../ListElement";

export interface FormProps {
    SetList(fileElements: IListElement[]): void
    SetClientId(id: string) :void
}