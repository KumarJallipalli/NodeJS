exports.greet = function (name) {
    console.log(`Hello ${name}`);
}

exports.welcome = function (name) {
    console.log(`Welcome Home ${name}`);
}

exports.name = "Paris";

const age = 20;
const city = "Lodon";

module.exports = {age, city}
// This replaces the above shorthand notation
// Hence, greet, welcome, name are not exported [ as overwritten ]