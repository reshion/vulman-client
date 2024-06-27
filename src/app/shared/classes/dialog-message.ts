import { DialogOptions } from "./dialog-options";


export class DialogMessage
{
    constructor(public title: string, public message: string, public options = new DialogOptions())
    {

    }
}
