import View from '/includes/js/View.js';
import Model, {EXPECTATION} from "/includes/js/Model.js";


export default class Controller {
    constructor(_canvas_info) {
        if (!_canvas_info) {
            alert('missing canvas information, please check code');
            throw 'missing canvas information, please check code';
        }

        this._view = new View(_canvas_info);
        this._model = new Model();
    }

    set_prerequisites() {
        this._view.set_canvas_size();
        this._set_click_handlers();
    }

    start() {
        const first_count = this._model.amount;
        const cash = this._model._cash;
        const bet = this._model._inzet;

        this._view.clear();
        this._view.draw_amount(first_count);
        this._view.set_cash(cash);
        this._view.set_bet(bet);
        this._view.set_text_value(first_count);
        this._view.draw_game();
    }

    _set_click_handlers() {

    }
}