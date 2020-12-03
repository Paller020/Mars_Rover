// Rover Object Goes Here
// ======================

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

console.log(rover.direction);

let grid = [
  [null, "obstacle", null, null, null, null, null, null, null, null],
  [null, "Rover", null, null, "obstacle", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "Rover", null, null, null, null, "obstacle"],
  ["obstacle", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "obstacle", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "Rover", null, null, null, null, null, null, "obstacle", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "obstacle", null, null, null]

]

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
    default:
      console.log("can't turn");
  }
  console.log(rover.direction);
}


function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;

    case "E":
      rover.direction = "S"
      break;

    case "S":
      rover.direction = "W"
      break;

    case "W":
      rover.direction = "N"
      break;

    default:
      console.log("Can't turn");
  }
  console.log(rover.directon);
}

function moveForward(rover, grid) {
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      if (rover.y > 0 && grid[rover.x][rover.y - 1] == null) {
        rover.y -= 1;} 
      else if (grid[rover.x][rover.y - 1] == "rover") {
        console.log("YOU/'RE GOING TO CRASH");
      }
      else{
        console.log("You Cannot move");
      }

      console.log(x + "," + y);
      break;

    case "E":
      if (rover.x < grid.length && grid[rover.x + 1][rover.y ] == null) {
        rover.x += 1;
      }
      else if (grid[rover.x +1][rover.y] == "rover") {
        console.log("YOU/'RE GOING TO CRASH");
      }
      else{
        console.log("You Cannot move");
      }
      break;

    case "S":
      if (rover.y < grid.length && grid[rover.x][rover.y + 1 ] == null) {
        rover.y += 1;
      }
      else if (grid[rover.x][rover.y + 1] == "rover") {
        console.log("YOU/'RE GOING TO CRASH");
      }
      else{
        console.log("You Cannot move");
      }
      break;

    case "W":
      if (rover.x > grid.length && grid[rover.x][rover.y - 1] == null) {
        rover.x -= 1;
      }
      else if (grid[rover.x - 1][rover.y] == "rover") {
        console.log("YOU/'RE GOING TO CRASH");
      }
      else{
        console.log("You Cannot move");
      }
      break;
    default:
      console.log("can't move");
  }
  console.log(rover.direction);
  console.log("position: " + rover.x + " " + rover.y);
  rover.travelLog.push(rover.x + ", " + rover.y);
}

function moveBackward(rover, grid) {
  console.log("moveBackward was called")
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        rover.y += 1;
      }
      console.log(x + "," + y);
      break;
    case "E":
      if (rover.x < 10) {
        rover.x -= 1;
      }
      break;
    case "S":
      if (rover.y < 10) {
        rover.y -= 1;
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x += 1;
      }
      break;
    default:
      console.log("can't move");
  }
  console.log(rover.direction);
  console.log("position: " + rover.x + " " + rover.y);
}

function command(str) {

  for (var i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        console.log("Please put correct input!!!");
    }
  }
}