##Points In Circle (GeoFence/GeoBountry)
This Package helps in finding if a geo coordinate provided  is located inside a circle. This can be used to check if a particular point is within or outside a circular GeoFence/GeoBountry.

## Installation
`npm install --save geo-point-in-circle`

## Usage
### Parameters
The package takes in three inputs parameters.
1. **Latitude** of the point to be checked.
1. **Longitude** of the point to be checked.
1. An **object** which holds the **latitude, longitude** of the **center** of the circle, and **radius of the circle in km**

### Return Object
The package returns an object that has a "**result**" boolean - **true** or **false** and **distanceFromCenter** the distance of the point from the center of the circle . If the point is within the cirlce, it returns true, else will return false.

### Example



    const checkPoint = require("geo-point-in-circle");
        
    circle = { 
        circleLat : 20.5937,
        circleLng : 78.9629,
        circleRadius : 120
    }
    
    console.log(checkPoint(20.902 , 79.9629 , circle));

The above will return the result as 


    { 
    	result: true, 
    	distanceFromCenter: 109.48865971794584
    }

