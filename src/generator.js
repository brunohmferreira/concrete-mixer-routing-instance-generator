const fs = require('fs');

function generateInstance (filename, numberOfConstructions, concreteMixerTruckFleet, numberOfTypesOfConcrete, fixedCostOfUsingTheConcreteMixerTruck, concreteMixerTruckCapacity) {
    let data = '';

    data = fillParameter(data, 'number of constructions', numberOfConstructions);
    data = fillParameter(data, 'concrete mixer truck fleet', concreteMixerTruckFleet);
    data = fillParameter(data, 'number of types of concrete', numberOfTypesOfConcrete);
    data = fillParameter(data, 'fixed cost of using the concrete mixer truck', fixedCostOfUsingTheConcreteMixerTruck);
    data = fillParameter(data, 'concrete mixer truck capacity', concreteMixerTruckCapacity);

    data += 'demands\n';
    data = fillDemands(data, numberOfConstructions, numberOfTypesOfConcrete, concreteMixerTruckCapacity);

    data += 'distances\n';
    data = fillDistances(data, numberOfConstructions)

    fs.mkdir('../instances', { recursive: true }, (err) => {
        if (err) throw new Error("The folder was not found or could not be opened.");
        fs.writeFileSync(`../instances/${filename}`, data);
    });
    
}

function fillParameter (data, name, value) {
    data += `${name}\n`;
    data += `${value}\n`;
    data += '\n';

    return data;
}

function fillDemands (data, numberOfConstructions, numberOfTypesOfConcrete, concreteMixerTruckCapacity) {
    let depot = '0 0 0';
    data += `${depot}\n`;
    for (let i = 0; i < numberOfConstructions; i++) {
        let randomQuantity = generateRandomDouble(0, concreteMixerTruckCapacity);
        let randomType = generateRandomInt(0, numberOfTypesOfConcrete - 1);
        data += `${i+1} ${randomQuantity} ${randomType}\n`;
    }
    data += '\n';
    return data;
}

function fillDistances (data, numberOfConstructions) {
    let maxDistance = 4394;
    for (let i = 0; i <= numberOfConstructions; i++) {
        for (let j = 0; j <= numberOfConstructions; j++) {
            if (i == j)
                data += '0\t';
            else
                data += `${generateRandomDouble(0, maxDistance)}\t`;
        }
        data += '\n';
    }
    data += '\n';
    return data;
}

function generateRandomInt(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1)) + min;
    return Number.parseInt(value);
}

function generateRandomDouble(min, max, places = 2) {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value).toFixed(places);
}

module.exports = {
    generateInstance
}