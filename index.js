// Code your solution in this file!

const scuberAdress = 42;
const blockDistance = 264;
const pricePerFoot = 0.02;

const distanceFromHqInBlocks = (street) => {
  return Math.abs(street - scuberAdress);
};

const distanceFromHqInFeet = (street) => {
  return distanceFromHqInBlocks(street) * blockDistance;
};

const distanceTravelledInFeet = (start, destination) => {
  const blocksCorvered = Math.abs(destination - start);
  const distanceInFeet = blocksCorvered * blockDistance;
  return distanceInFeet;
};

const calculatesFarePrice = (start, destination) => {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  console.log(distanceInFeet);
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return (distanceInFeet - 400) * pricePerFoot;
  } else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};
