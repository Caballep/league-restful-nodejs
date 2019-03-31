var faker = require('faker');

exports.getSomething = (req, res) => {
    
    var person = ({
        prefix: faker.name.prefix(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        age: faker.address.country()
    });
    
    res.status(200).send(person);
};