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

Car.prototype.passengerList = function() {
  var arrValue = this.passengers;
  var length = arrValue.length;
  var result = '';

  if (length === 0) {
    return "no passengers";
  } else if (length >= 3){
    for (var i = 0; i < length; i++) {
      console.log("array index:", i);
      if ( i === length - 1 ) {
        result += 'and ' + arrValue[i];
        console.log('adding and:', result);
      } else {
        result += arrValue[i] + ", ";
      }
    }
  }  else {
    return arrValue.join('');
  }
  return result;
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
