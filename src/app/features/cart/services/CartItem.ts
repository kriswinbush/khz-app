import {List,Record} from 'immutable';

const ItemRecord = Record({
    id: 0,
    price: 0.00,
    description: "",
    title: "",
    completed: false
});

export class CartItem extends ItemRecord {

    id:number;
    price:number;
    description:string;
    title:string;
    completed: boolean;

    constructor(props) {
        super(props);
    }

}