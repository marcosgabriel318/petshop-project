export class DataDto{
    constructor(message: string, data: any[]){
        this.message = message;
        this.data = data;
    }

    message: string
    data: any[]
}