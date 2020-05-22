const degreeToRadians = require("./degree-to-radians");

const distanceCalculation = (lat1, lng1, lat2, lng2) => {
    let earthRadius = 6371;                               //radius of Earth in KM.
    let differenceOfLatInRadians = degreeToRadians(lat1 - lat2);
    let differenceOfLngInRadians = degreeToRadians(lng1 - lng2);

    let lat1InRadians = degreeToRadians(lat1);
    let lat2InRadians = degreeToRadians(lat2);

    let a = Math.sin(differenceOfLatInRadians/2) * Math.sin(differenceOfLatInRadians/2) +
            Math.cos(lat1InRadians) * Math.cos(lat2InRadians) * 
            Math.sin(differenceOfLngInRadians/2) * Math.sin(differenceOfLngInRadians/2) ;
    
    let c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1-a) );
    return earthRadius*c;
}

module.exports = distanceCalculation;