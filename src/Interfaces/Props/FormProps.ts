import { IListElement } from "../ListElement";

export interface FormProps {
    OnAdd(fileElements: IListElement[]): void
}