/*  To get started, we are just going to create an array of common unit words, which we'll try to
    match against the first non-numeric substring in an ingredient item. This is an extremely
    crude way to go: it will fail even to capture a common unit like 'fluid ounces'/'fl. oz.'!
    Eventually, we would like to parse the ingredient string more systematically,
    perhaps using a learning algorithm of some sorts to attempt to tag unit-words and abbreviations
    automatically. This is a very temporary fix!    

    Note: we are going to normalize for capitalization upon testing the string, to make our lives 
    just a smidge easier.
*/

module.exports = [
    't',
    'tsp',
    'tsp.',
    'teaspoon',
    'teaspoons',
    'T',
    'tbsp',
    'tbsp.',
    'tablespoon',
    'tablespoons',
    'ounce',
    'ounces',
    'oz',
    'oz.',
    'c',
    'cup',
    'cups',
    'pint',
    'pints',
    'p',
    'pt',
    'quart',
    'quarts',
    'q',
    'qt',
    'gallon',
    'gallons',
    'g',
    'gal',
    'ml',
    'milliliter',
    'milliliters',
    'millilitre',
    'millilitres',
    'cc',
    'l',
    'liter',
    'liters',
    'litre',
    'litres',
    'dl',
    'deciliter',
    'deciliters',
    'decilitre',
    'decilitres',
    'pound',
    'pounds',
    'lb',
    'lbs',
    'lb.',
    'lbs.',
    'mg',
    'miligram',
    'miligrams',
    'miligramme',
    'miligrammes',
    'g',
    'gram',
    'grams',
    'kg',
    'kilogram',
    'kilograms',
    'kilogramme',
    'kilogrammes',
    'mm',
    'millimeter',
    'millimeters',
    'millimetre',
    'millimetres',
    'cm',
    'centimeter',
    'centimeters',
    'centimetre',
    'centimetres',
    "\"",
    'in',
    'in.',
    'inch',
    'inches',
    'pinch',
    'pinches',
    'ds',
    'dash',
    'dashes'
]