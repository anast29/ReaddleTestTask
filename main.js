document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('canvas-content');
    var context = canvas.getContext('2d');
    const firstimage = document.getElementById('first-image');
    const secondimage = document.getElementById('second-image');

    firstimage.onchange = function () {
        readURL(this, 0, 0);
    };

    secondimage.onchange = function () {
      readURL(this, 150, 0);
    };

    function readURL(input, x, y) {
        if (input.files && input.files[0]) {
            var img = new Image();
            img.onload = function () {
                context.drawImage(img, x, y, 150, 150);
            };
        }
        img.src = URL.createObjectURL(input.files[0]);
    }
    // function ratioImage(img) {
    //
    //     var height = img.height();
    //     var maxWidth = canvas.width();
    //     var maxHeight = canvas.height();
    //     var ratio = maxWidth / img.width;
    //     if(height * ratio > maxHeight) {
    //         ratio = maxHeight / height;
    //     }
    //    return (width * ratio);
    // }
});




