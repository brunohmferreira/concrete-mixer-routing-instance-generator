
const readlineSync = require('readline-sync');
const { generateInstance } = require('./generator');

console.clear();

const main = () => {

    
        let numberOfConstructions = '';
        let concreteMixerTruckFleet = '';
        let numberOfTypesOfConcrete = '';
        let fixedCostOfUsingTheConcreteMixerTruck = '';
        let concreteMixerTruckCapacity = '';
        
        do {
            numberOfConstructions = readlineSync.question('\n number of constructions [default: 5]: ');
    
            if (!numberOfConstructions) numberOfConstructions = 5;
            if (isNaN(numberOfConstructions)) process.stdout.write('Invalid number of constructions!! Try again...');
        } while (!numberOfConstructions || isNaN(numberOfConstructions));

        do {
            concreteMixerTruckFleet = readlineSync.question('\n concrete mixer truck fleet [default: 1]: ');
    
            if (!concreteMixerTruckFleet) concreteMixerTruckFleet = 1;
        if (isNaN(concreteMixerTruckFleet)) process.stdout.write('Invalid value for concrete mixer truck fleet!! Try again...');
        } while (!concreteMixerTruckFleet || isNaN(concreteMixerTruckFleet));

        do {
            numberOfTypesOfConcrete = readlineSync.question('\n number of types of concrete [default: 1]: ');
    
            if (!numberOfTypesOfConcrete) numberOfTypesOfConcrete = 1;
            if (isNaN(numberOfTypesOfConcrete)) process.stdout.write('Invalid number of types of concrete!! Try again...');
        } while (!numberOfTypesOfConcrete || isNaN(numberOfTypesOfConcrete));

        do {
            fixedCostOfUsingTheConcreteMixerTruck = readlineSync.question('\n fixed cost of using the concrete mixer truck [default: 10.0]: ');
    
            if (!fixedCostOfUsingTheConcreteMixerTruck) fixedCostOfUsingTheConcreteMixerTruck = 10.0;
            if (isNaN(fixedCostOfUsingTheConcreteMixerTruck)) process.stdout.write('Invalid value for fixed cost of using the concrete mixer truck!! Try again...');
        } while (!fixedCostOfUsingTheConcreteMixerTruck || isNaN(fixedCostOfUsingTheConcreteMixerTruck));

        do {
            concreteMixerTruckCapacity = readlineSync.question('\n concrete mixer truck capacity [default: 8.0]: ');
    
            if (!concreteMixerTruckCapacity) concreteMixerTruckCapacity = 8.0;
            if (isNaN(concreteMixerTruckCapacity)) process.stdout.write('Invalid value for concrete mixer truck capacity!! Try again...');
        } while (!concreteMixerTruckCapacity || isNaN(concreteMixerTruckCapacity));

        let filename = readlineSync.question('\n File name [default: ConcreteMixerRouting]: ');

        if(!filename) filename = 'ConcreteMixerRouting.txt';
        if(!filename.endsWith(".txt")) filename += '.txt';

    try {
        generateInstance(filename, numberOfConstructions, concreteMixerTruckFleet, numberOfTypesOfConcrete, fixedCostOfUsingTheConcreteMixerTruck, concreteMixerTruckCapacity);
        console.log('Instance created successfully!');
    } catch (err) {
        console.log(`Failed to create instance - ${err.message}`);
    }
}

main();