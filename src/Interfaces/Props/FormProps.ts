import { IListElement } from "../ListElement";

export interface FormProps {
    SetList(fileElements: IListElement[]): void
    SetClientId(id: string) :void
    SetPlaceholder(toggle: boolean): void
}

export interface PlaceholderProps {
    show: boolean
}