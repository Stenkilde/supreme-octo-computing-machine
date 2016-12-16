import {app} from '../../app';
import {Component} from '../Component';

@Component(app, 'Test', {
    controllerAs: 'vm',
    templateUrl: 'src/components/test/test.html'
})
export class Test {
    static $inject = [];

    constructor() {}
}