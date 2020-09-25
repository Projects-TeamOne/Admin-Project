//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please include name']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "Peaches are yummy"
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);

const peach = new Fruit({
    name: "Peach",
    rating: 9,
    review: "Love that fruit"
});

// peach.save();

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 5,
    review: "Love it as a juice"
});

pineapple.save();
 
const person = new Person({
    name: "John",
    age: 24,
    favouriteFruit: peach
});

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 3,
//     review: "I have allergies"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 10,
//     review: "Refreshing"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("There are no errors.");
//     }
// });

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        })
    }
});

// Fruit.updateOne({_id: "5f429abf89229162808db8b4"}, {name: "Peach"}, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully updated the document.")
//     }
// });

Person.updateOne({name: "Ali"}, {favouriteFruit: pineapple}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfully updated the document.")
    }
});

// Fruit.deleteOne({_id: "5f429abf89229162808db8b4"}, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully deleted the document.")
//     }
// });

// Person.deleteMany({name: "Ali"}, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully deleted documents.")
//     }
// });

