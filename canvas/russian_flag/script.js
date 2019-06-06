function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.strokeRect(10,10,200,150);

        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(10, 60, 200,100);

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(10, 110, 200,50);

    }
}