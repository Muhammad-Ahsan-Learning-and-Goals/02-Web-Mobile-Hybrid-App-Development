
class Car{
  constructor(manufacturer,carModel,...optionalData){
    this.manufacturer = manufacturer;
    this.carModel = carModel;
    this.optionalData = optionalData
    
  }

  showData(){
    console.log(this.manufacturer)
    
    console.log(this.carModel)

    for (var i = 0; i < this.optionalData.length; i++) {
      console.log( this.optionalData[i]);
    }
    console.log("\n")
  }
}


var car = new Car(manufacturer="Suzki",carModel="Wagon R",color="white",reg="Lahore")
car.showData()


var car = new Car(manufacturer="Honda",carModel="City",color="Black",reg="Karachi",body="Sedan")
car.showData()


