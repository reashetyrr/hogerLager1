import Controller from '/includes/js/Controller.js';

export default class HogerLager {
    constructor(canvas_id=null) {
        let _canvas_info = {
            type: 'element',
            querySelector: 'canvas'
        };
        if (canvas_id) {
            _canvas_info.querySelector = canvas_id;
            _canvas_info.type = 'id';
        }

        this._controller = new Controller(_canvas_info);
        this._controller.set_prerequisites();
    }

    start() {
        this._controller.start();
    }
}

