const distance = require("./src/distance-calulation");

const pointInCircle = (pointLat, pointLng, circle) => {

    const {circleLat, circleLng, circleRadius} = circle;

    distanceOfPointFromCircleCenter = distance(pointLat, pointLng,circleLat, circleLng,);

    return distanceOfPointFromCircleCenter > circleRadius ? {result : false, distanceFromCenter: distanceOfPointFromCircleCenter} : {result : true, distanceFromCenter: distanceOfPointFromCircleCenter};
    
}

module.exports = pointInCircle;
