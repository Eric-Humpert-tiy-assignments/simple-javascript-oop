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
    this.passengers.push(passenger);
}

Car.prototype.description = function(make, model) {
    return "This is a " + this.make + " " + this.model;
}

Car.prototype.passengerList = function(passengers) {
  if (this.passengers === null) {
    return "no passengers";
  } else {
    return this.passengers;
  }
}

function ChevyCar(make, model) {
  this.make= make;
  this.model = model;
  this.passengers = [];
}

ChevyCar.prototype.breakDown = function() {

}

ChevyCar.prototype.honk = function() {
  return "boop boop";
}
