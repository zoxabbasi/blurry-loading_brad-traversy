const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

// This value will go from 0 to 100
let load = 0;

// The variable 'int' will run the 'blurring' function at 30ms using 'setInterval'
let int = setInterval(blurring, 30);


function blurring() {
    load++;

    // When the count reaches 100
    if (load > 99) {

        // Stop the 'setInterval' function
        clearInterval(int);
    }

    // Using template literalls to change the 'loadText' values using 'load' variable
    loadText.innerText = `${load}%`;

    // Opacity value goes from 1 to 0 while the load value goes from 0 to 100 in the same amount of time
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    //Filter blur goes from 30 to 0 while the load value goes from 0 to 100 in the same amount of time
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

    // Check the 'load' values incrementing
    // console.log(load);
}


//https:stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}