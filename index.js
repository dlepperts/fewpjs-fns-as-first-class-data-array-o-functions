function leashDog() {
    console.log("Leash Byron the poodle");
}

function wakeDog() {
    console.log("Wake Byron the poodle");
}

function walkToPark() {
    console.log("Walk to the park with Byron the poodle");
}

function throwFrisbee() {
    console.log("Throw the frisbee for Byron the poodle");
}

function walkHome() {
    console.log("Walk home with Byron the poodle");
}

function unleashDog() {
    console.log("Unleash Byron the poodle"); 
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }