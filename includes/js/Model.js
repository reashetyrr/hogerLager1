export const EXPECTATION = Object.freeze({
    HIGHER: 0,
    LOWER: 1,
});

export default class Model {
    constructor() {
        this._inzet = 0;
        this._cash = 1000;
        this._expectation = EXPECTATION.HIGHER;
        this.max_amount = 75;
        this._current_amount = 0;
    }

    get amount() {
        let amount = 0;
        do {
            amount = Math.floor(Math.random() * this.max_amount) + 1;
        } while (amount === this._current_amount);

        this._current_amount = amount;
        return amount;
    }
}