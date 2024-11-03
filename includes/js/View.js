export default class View {
    constructor(_canvas_info) {
        this._canvas = 'id' ===  _canvas_info.type? document.getElementById(_canvas_info.querySelector) : document.querySelector(_canvas_info.querySelector);
        this._canvas_context = this._canvas.getContext('2d');

        this.text_value_span = document.getElementById('current_value');
    }

    set_canvas_size() {
        const {width, height} = this._canvas.getBoundingClientRect();
        this._canvas_context.canvas.width = width;
        this._canvas_context.canvas.height = height;
    }

    clear() {
        this._canvas_context.clearRect(0, 0, this._canvas_context.canvas.width, this._canvas_context.canvas.height);
    }
    __degrees_to_radia(degrees) {
        return (degrees * Math.PI) / 180;
    }

    draw_amount(amount) {
        const canvas_center = this._canvas_context.canvas.width / 2;
        const outer_radius = 120;

        const total_segments = 75;
        const angle_per_segment = (2 * Math.PI) / total_segments;
        const fill_angle = angle_per_segment * amount;

        this._canvas_context.beginPath();
        this._canvas_context.moveTo(canvas_center, canvas_center);
        this._canvas_context.arc(canvas_center, canvas_center, outer_radius, -Math.PI / 2, -Math.PI / 2 + fill_angle);
        this._canvas_context.lineTo(canvas_center, canvas_center);
        this._canvas_context.fillStyle = '#696969';
        this._canvas_context.fill();
        this._canvas_context.closePath();
    }

    draw_game() {
        const canvas_center = this._canvas_context.canvas.width / 2;
        const base_length = 25;
        const multiplier = 1.5;
        const amount_of_lines = 75;
        const outer_radius = 120;

        for (let i = 0; i < amount_of_lines; i++) {
            const angle = this.__degrees_to_radia((360 / amount_of_lines) * i);

            let line_length = base_length;
            if (0 === i % 4) {
                line_length *= multiplier;
            }

            const x_end = canvas_center + Math.cos(angle) * outer_radius;
            const y_end = canvas_center + Math.sin(angle) * outer_radius;

            const x_start = canvas_center + Math.cos(angle) * (outer_radius - line_length);
            const y_start = canvas_center + Math.sin(angle) * (outer_radius - line_length);

            this._canvas_context.beginPath();
            this._canvas_context.moveTo(x_end, y_end);
            this._canvas_context.lineTo(x_start, y_start);
            this._canvas_context.strokeStyle = 'white';
            this._canvas_context.stroke();
        }

        this._canvas_context.beginPath();
        this._canvas_context.arc(canvas_center, canvas_center, outer_radius + 1, 0, 2 * Math.PI);
        this._canvas_context.strokeStyle = 'smoke';
        this._canvas_context.stroke();
    }

    set_text_value(value) {
        this.text_value_span.innerText = value;
    }
}