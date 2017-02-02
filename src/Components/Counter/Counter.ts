import {Component} from '../../decorators/Component';

@Component({
    bindings: {},
    templateUrl: '/Components/Counter/Counter.html',
    controllerAs: 'vm'
})
export default class Counter {
    public count = 0;

    constructor() {}

    $onInit() {}

    public Count() {
        this.count++;
    }
}