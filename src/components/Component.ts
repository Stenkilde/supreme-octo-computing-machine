import * as angular from 'angular';

export function Component(moduleOrName: string | angular.IModule, selector: string, options: {
    controllerAs?: string,
    template?: string,
    templateUrl?: string,
    bindings?: any,
    transclude?: boolean
}) {
    return (controller: Function) => {
        let module = typeof moduleOrName === 'string'
            ? angular.module(moduleOrName)
            : moduleOrName;
        module.component(selector, angular.extend(options, { controller: controller }));
    }
}