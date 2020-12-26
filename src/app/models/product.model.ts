export class ProductModel
{
    public name : string;
    public description : string;
    public price : number;
    public imagePath : string;



    constructor(name:string,desc:string,imagePath:string,price:number)
    {

        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.price = price;

    }
}