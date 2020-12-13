// getting a random number for coordinates x and y (from 0 to size-1)
function getRandomNumber (size) {
    return Math.floor(Math.random() * size);
};


// getting distance from click (event) to the treasure (target)
function getDistance (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};      


// getting distance hint
function getDistanceHint (distance) {
    if (distance < 20) {
        return 'Burning!';
    } else if (distance < 40) {
        return 'Very hot!';
    } else if (distance < 80) {
        return 'Hot.';
    } else if (distance < 160) {
        return 'Warm.';
    } else if (distance < 320) {
        return 'Cold.';
    } else if (distance < 640) {
        return 'Very cold..'
    } else {
        return 'Freezing...'
    }
};


// the width and height of the map
let width = 800;
let height = 800;      


// click counter
let clicks = 0;

// remaining clicks
let remainingClicks = 20;


// getting a random position on the map
let target = {
    x : getRandomNumber(width),
    y : getRandomNumber(height)
};

console.log(target);


//click function
$('#map').click(function (event) {

    // increasing click counter
    clicks++;

    //decreasing remaing clicks
    remainingClicks--;

    // distance from click to target
    let distance = getDistance(event, target);

    // converting distance to a hint
    let distanceHint = getDistanceHint(distance);

    // changing #distance element to a new hint
    $('#distanceAndClicks').text('Remaining clicks: ' + remainingClicks + '. Hint: ' + distanceHint);

    // if a click is too close showing victory message
    if (distance < 10) {
        $('#rules').text('Treasure is found! You\'ve made ' + clicks + ' clicks! Reload the page to start a new game.');
        $('#map').fadeOut(50);
        $('#distanceAndClicks').fadeOut(50);
    } else if (remainingClicks <= 0) {
        $('#rules').text('Game over! Reload the page to start a new game.');
        remainingClicks = 0;
        $('#map').fadeOut(50);
        $('#distanceAndClicks').fadeOut(50);
    }
});