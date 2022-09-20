/**
Remember the bouncing DVD logo? Given the dimensions of the logo, its initial coordinates,
and the size of a screen, write a function that will determine if its next collision will
hit the corner of the screen. Assume it is initially moving southeast with a slope of -1.
Extra credit, figure out how many bounces/collisions it will take to hit a corner!
 */

const cornerHit = (dimensions, initialCoordinates, screenSize) => {
  // Let n be the number of bounces
  // If we start form [0, 0]
  // if SE corner hit: n is odd and
  // n*(screenSize[1] - dimensions[1]) === (screenSize[0] - dimensions[1])

  // if SW corder hit: n is even and
  // n*(screenSize[1] - dimensions[1]) === (screenSize[0] - dimensions[1])

  // if NE corder hit: n is odd and
  // (screenSize[1] - dimensions[1]) === n*(screenSize[0] - dimensions[1])

  // if NW corder hit: n is even and
  // n*(screenSize[1] - dimensions[1]) === (screenSize[0] - dimensions[1])

  // If we don't start from the origin
  // if SE corner hit: n is odd and
  // n*(screenSize[1] - dimensions[1]) === (screenSize[0] - dimensions[1])
};

const dimensions = [5, 5];
const initialCoordinates = [0, 0];
const screenSize = [100, 100];
