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

    add_cash(amount) {
        this._cash += amount;
    }

    increase_bet() {
        this._inzet += 10;
        this._cash -= 10;
    }

    set expectation(expectation) {
        if (![EXPECTATION.HIGHER, EXPECTATION.LOWER].includes(expectation)) {
            alert('unknown expectation');
            throw 'unknown expectation';
        }
        this._expectation = expectation;
    }

    was_correct() {
        const old_amount = this._current_amount;
        this.amount; // this creates a new amount in this._current_amount

        if (EXPECTATION.LOWER === this._expectation) {
            return this._current_amount < old_amount;
        }

        return this._current_amount > old_amount;
    }
}