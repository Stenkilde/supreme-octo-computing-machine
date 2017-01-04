import * as angular from "angular";
import Counter from './Counter';

angular.module("app.counter", [])
    .component("counter", new Counter());