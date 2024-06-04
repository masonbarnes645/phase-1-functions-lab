function distanceFromHqInBlocks(location){
    if (location >= 42){
        return (location - 42);
    }
    else{
        return (42-location);
    }
    
}
function distanceFromHqInFeet(location){
    let blocks = distanceFromHqInBlocks(location);
    return blocks*264
    
}
function distanceTravelledInFeet(start,end){
    if(start > end){
        return 264*(start-end);
    }
    else{
        return 264*(end-start);
    }
}
function calculatesFarePrice(start,end){
    if(distanceTravelledInFeet(start,end) > 2500){
        return 'cannot travel that far';
    }
    else if(distanceTravelledInFeet(start,end) > 2000){
        return 25
    }

    else if(distanceTravelledInFeet(start,end) >= 400 ){
        return (distanceTravelledInFeet(start,end)-400)*.02
    }
    else{
        return 0
    }

}