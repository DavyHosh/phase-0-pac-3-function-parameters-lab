function introduction(name) {
    return "Hi, my name is ${name}.";
}

console.log(introduction("Hi, my name is Aki."));
console.log(introduction("Hi, my name is Samip."));


function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Aki", "Ember.js"));
console.log(introductionWithLanguageOptional("Sampi", "React"));
console.log(introductionWithLanguageOptional("Gracie", "Python"));