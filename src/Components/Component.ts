/// <reference path="../../typings/index.d.ts" />

export const Component = function(options: ng.IComponentOptions): Function {
    return (controller: Function) => {
        return angular.extend(options, {controller});
    };
};