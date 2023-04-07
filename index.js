// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    const hqStreetNumber = 42;
    return Math.abs(streetNumber - hqStreetNumber);
}

function distanceFromHqInFeet(streetNumber) {
    const blockLength = 264;
    const hqStreetNumber = 42;
    let distanceInBlocks = Math.abs(streetNumber - hqStreetNumber);
    return distanceInBlocks * blockLength;
}

function distanceTravelledInFeet(start, end) {
    const blockLength = 264;
    let distanceInBlocks = Math.abs(end - start);
    return distanceInBlocks * blockLength;
}

function calculatesFarePrice(start, destination) {
    const blockLength = 264;
    let distanceInBlocks = Math.abs(destination - start);
    let distanceInFeet = distanceInBlocks * blockLength;

    if (distanceInFeet <= 400) {
        return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        let fare = (distanceInFeet - 400) * 0.02;
        return 2.56;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}