import templateUrl from './Counter.html';

export const Counter = {
    bindings: {},
    template: templateUrl,
    controller: class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            this.count = this.count+1;
        }
        decrement() {
            if (this.count > 0) {
                this.count = this.count - 1;
            } else {
                return;
            }
        }
    }
};
