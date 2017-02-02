import {Component} from '../../decorators/Component';

@Component({
    bindings: {},
    templateUrl: '/Containers/PageNotFound/PageNotFound.html',
    controllerAs: 'vm'
})
export default class PageNotFound {
    constructor() {}

    $onInit() {
        console.log('Im the 404');
    }
}