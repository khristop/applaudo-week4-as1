import { VehicleFactory, VehicleSpec, Vehicle, Car, Boat, Plane } from './vehicle-factory';

let requirements = [
    {type:"boat", speed: 20, name: 'El titanic'},
    {type:"boat", speed: 30, name: 'la pinta'},
    {type:"car", speed: 40, name: 'Meteoro'},
    {type:"car", speed: 50, name: 'El rayo McQueen'},
    {type:"plane", speed: 200, name: 'Jet'},
    {type:"plane", speed: 4, name: 'no Jet'},
];

let vehicleFactory = new VehicleFactory();

let vehicles = requirements.map(({type, ...spec}) => vehicleFactory.createVehicles(type, <VehicleSpec> spec));

vehicles.forEach(vehicle => {
        [0,1].forEach(() => vehicle.accelerate());
        [0,1,2,3,4,5,6,7,8,9].forEach(() => vehicle.desacelerate());
        vehicle.printSpeed();
});


function isCar(obj: any): obj is Car{
    return  obj instanceof Car;
}

let result = vehicles.filter( isCar );
result.forEach(vehicleFiltered => vehicleFiltered.printSpeed() );
