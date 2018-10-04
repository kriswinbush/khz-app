import {List,Record} from 'immutable';

const ItemRecord = Record({
    id: 0,
    imgUri: "",
    price: 0.00,
    description: "",
    title: "",
    fit: "",
    ordered: false,
    quantity: 1
});

export class CatalogItem extends ItemRecord {

    id: number;
    imgUri: string;
    price: number;
    description: string;
    title: string;
    fit: string;
    ordered: boolean;
    quantity: number;

    constructor(props) {
        super(props);
    }

}