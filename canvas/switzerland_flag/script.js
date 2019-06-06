function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = "red";
        ctx.fillRect(10,10, 200,160);
        ctx.strokeStyle;
        ctx.strokeRect(10,10,200,160);

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(50, 70, 40, 40);

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(90, 70, 40, 40);

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(130, 70, 40, 40);

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(90, 30, 40, 40);

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(90, 110, 40, 40);
    }
}