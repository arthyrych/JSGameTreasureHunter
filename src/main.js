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
    if (distance < 10) {
        return 'Burning!';
    } else if (distance < 20) {
        return 'Very hot';
    } else if (distance < 40) {
        return 'Hot';
    } else if (distance < 80) {
        return 'Warm';
    } else if (distance < 160) {
        return 'Cold';
    } else if (distance < 320) {
        return 'Very cold'
    } else if (distance < 640) {
        return 'Very very cold!'
    } else {
        return 'Freezing!'
    }
};


// the width and height of the map
let width = 800;
let height = 800;      


// click counter
let clicks = 0;


// getting a random position on the map
let target = {
    x : getRandomNumber(width),
    y : getRandomNumber(height)
};

console.log(target);


//click function
$('#map').click(function (event) {

    clicks++;

    // distance from click to target
    let distance = getDistance(event, target);

    // converting distance to a hint
    let distanceHint = getDistanceHint(distance);

    // changing #distance element to a new hint
    $('#distance').text(distanceHint);

    // if a click is too close showing victory message
    if (distance < 8) {
        alert('Treasure is found! You\'ve made ' + clicks + ' clicks!');
    }
});