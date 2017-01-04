//import {App} from '../../app';
import {Component} from '../Component';

@Component({
    bindings: {
        prop: '<'
    },
    template: '<p>{{$ctrl.prop}}</p>'
})
export class Counter {

    prop: string;

    constructor() {
        console.log('test');
    }

    $onInit() {
        // do something with this.prop or this.$q upon initialization
    }
}