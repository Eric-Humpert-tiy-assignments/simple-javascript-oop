'use strict';

function Car(make, model) {
  this.make= make;
  this.model = model;
  this.passengers = [];
}

Car.prototype.honk = function() {
    return "beep beep";
}


Car.prototype.addPassenger = function(passenger) {
  console.log("CHecking the people", this.passengers);
    this.passengers.push(passenger);
}

Car.prototype.description = function(make, model) {
    return "This is a " + this.make + " " + this.model;
}
