import {Component} from '../../decorators/Component';
import * as Styles from './Home.css';

@Component({
    bindings: {},
    templateUrl: '/Containers/Home/Home.html',
    controllerAs: 'vm'
})
export default class Home {
    public styles = Styles;
    constructor() {}

    $onInit() {}
}