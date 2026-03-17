<<<<<<< HEAD
let images = ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg"];
=======
let images = ["image-1.jpg","image-2.jpg","image-3.jpg"];
>>>>>>> localstorage
let index = 0;

setTimeout(function(){
    const board = document.getElementById("board");
    const adImage = document.getElementById("adImage");

    // Show banner
    board.classList.remove("hidden");

    // Show first image
    adImage.src = images[index];

    // Change images every 2 seconds
    setInterval(function(){
        index = (index + 1) % images.length;
        adImage.src = images[index];
<<<<<<< HEAD
    }, 2000);

}, 5000);
=======
    }, 1500);

}, 3000);
>>>>>>> localstorage
