document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('canvas-content');
    var context = canvas.getContext('2d');
    const finput = document.getElementById('first-image');
    const sinput = document.getElementById('second-image');
    const overtical = document.getElementById('vertical');
    const ohorizontal = document.getElementById('horizontal');
    var flag, bool;
    var fimg = new Image();
    var simg = new Image();

    overtical.onchange = function () {
        canvas.width = 300;
        canvas.height = 950;
        if (finput.files.length !==0) {
            positionFirstImage(finput);
        }
        if (sinput.files.length !==0){
            positionSecondImage(sinput);
        }
    };

    ohorizontal.onchange = function () {
        canvas.height = 300;
        canvas.width = 950;
        if (finput.files.length !==0) {
            positionFirstImage(finput);
        }
        if (sinput.files.length !==0){
            positionSecondImage(sinput);
        }
    };

    finput.onchange = function () {
        flag = true;
        positionFirstImage(this);
    };

    sinput.onchange = function () {
        bool = true;
        positionSecondImage(this);
    };

    function positionFirstImage(input) {
        draw(input, fimg, 0, 0);
        if (bool) {
            fimg.onload = function () {
                context.clearRect(0, 0, simg.width, simg.height);
                if (ohorizontal.checked) {
                    draw(sinput, simg, fimg.width * aspectRatio(fimg), 0);
                } else {
                    draw(sinput, simg, 0, fimg.height * aspectRatio(fimg));
                }
                draw(finput, fimg, 0, 0);
            }
        }
    }

    function positionSecondImage(input) {
        if (ohorizontal.checked) {
            draw(input, simg, (flag) ? fimg.width * aspectRatio(fimg) : 0, 0);
        } else {
            draw(input, simg, 0, (flag) ? fimg.height * aspectRatio(fimg) : 0);
        }
    }

    function draw(input, img, x, y) {
        context.clearRect(x, y, img.width * aspectRatio(img), img.height * aspectRatio(img));
        img.onload = function () {
            if (ohorizontal.checked) {
                context.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * aspectRatio(img) , canvas.height);
                context.save();
            } else {
                context.drawImage(img, 0, 0, img.width, img.height, x, y, canvas.width, img.height * aspectRatio(img));
                context.save();
            }
        };
        img.src = URL.createObjectURL(input.files[0]);
    }

    function aspectRatio(image) {
        const HRATIO = canvas.width / image.width;
        const WRATIO = canvas.height / image.height;
        return Math.min(HRATIO, WRATIO);
    }

});




