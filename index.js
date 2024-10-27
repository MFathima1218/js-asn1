const students = [
    { "name": "John Doe", "age": 20, "address": { "pincode": "100001", "city": "New York", "country": "USA" } },
    { "name": "Alice Smith", "age": 22, "address": { "pincode": "200002", "city": "Los Angeles", "country": "USA" } },
    { "name": "Rahul Mehta", "age": 21, "address": { "pincode": "110011", "city": "Delhi", "country": "India" } },
    { "name": "Maria Garcia", "age": 23, "address": { "pincode": "28013", "city": "Madrid", "country": "Spain" } },
    { "name": "Sophia Brown", "age": 19, "address": { "pincode": "SW1A 1AA", "city": "London", "country": "UK" } },
    { "name": "Liam Nguyen", "age": 20, "address": { "pincode": "75001", "city": "Paris", "country": "France" } },
    { "name": "Emma Johnson", "age": 21, "address": { "pincode": "90001", "city": "Chicago", "country": "USA" } },
    { "name": "David Chen", "age": 22, "address": { "pincode": "200080", "city": "Shanghai", "country": "China" } },
    { "name": "Nina Patel", "age": 24, "address": { "pincode": "400001", "city": "Mumbai", "country": "India" } },
    { "name": "Carlos Sanchez", "age": 23, "address": { "pincode": "01000", "city": "Mexico City", "country": "Mexico" } }
];


// a function that takes in the JSON data and prints out all the students' names.

function printStudentNames(students) {
    students.forEach(student => {
        console.log(student.name);
    });
}
printStudentNames(students);


// a function that lists all students who are from the USA.

function listStudentsFromUSA(students) {
    const usaStudents = students.filter(student => student.address.country === "USA");
    usaStudents.forEach(student => {
        console.log(student.name);
    });
}
listStudentsFromUSA(students);

// a function to find the city of a student based on their name.

function findCityByStudentName(students, studentName) {
    const student = students.find(s => s.name === studentName);
    return student ? student.address.city : "Student not found";
}
console.log(findCityByStudentName(students, "John Doe")); // Output: New York
console.log(findCityByStudentName(students, "Janme")); // Output: Student not found


// a function that returns an array of all students who are above 21 years old.
function getStudentsAbove21(students) {
    return students.filter(student => student.age > 21);
}

// Example usage:
const studentsAbove21 = getStudentsAbove21(students);
console.log(studentsAbove21);


// a function that returns an array of names of students from a given country, like "India" or "Japan".

function getStudentNamesByCountry(students, country) {
    return students
        .filter(student => student.address.country === country)
        .map(student => student.name);
}

const indianStudents = getStudentNamesByCountry(students, "India");
console.log(indianStudents); 

const japaneseStudents = getStudentNamesByCountry(students, "Japan");
console.log(japaneseStudents); 

// a function that returns an array of objects with only name and age properties for each student.

function getNamesAndAges(students) {
    return students.map(student => {
        return {
            name: student.name,
            age: student.age
        };
    });
}

const namesAndAges = getNamesAndAges(students);
console.log(namesAndAges);

// a function to add a new student to the JSON data. Accept name, age, pincode, city, and country as inputs.

function addStudent(students, name, age, pincode, city, country) {
    const newStudent = {
        name: name,
        age: age,
        address: {
            pincode: pincode,
            city: city,
            country: country
        }
    };
    students.push(newStudent);
}
addStudent(students, "New Student", 25, "123456", "Tokyo", "Japan");
console.log(students);

//  a function that updates the city of a student based on their name. If the student isn’t found, return "Student not found".

function updateStudentCity(students, studentName, newCity) {
    const student = students.find(s => s.name === studentName);
    
    if (student) {
        student.address.city = newCity;
        return `City updated to ${newCity}`;
    } else {
        return "Student not found";
    }
}

console.log(updateStudentCity(students, "John Doe", "San Francisco")); 
console.log(updateStudentCity(students, "Jane Doe", "Tokyo")); 


// a function that increases the age of each student by 1 (e.g., for updating a new academic year).

function incrementStudentAges(students) {
    students.forEach(student => {
        student.age += 1;
    });
}
incrementStudentAges(students);
console.log(students);

// a function to count how many students are from each country. Return the result as an object, e.g., { "USA": 5, "India": 3 }

function countStudentsByCountry(students) {
    const countryCount = {};

    students.forEach(student => {
        const country = student.address.country;
        if (countryCount[country]) {
            countryCount[country] += 1;
        } else {
            countryCount[country] = 1;
        }
    });

    return countryCount;
}
const studentCountByCountry = countStudentsByCountry(students);
console.log(studentCountByCountry);

// a function that calculates the average age of all students.

function calculateAverageAge(students) {
    if (students.length === 0) return 0; 

    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}
const averageAge = calculateAverageAge(students);
console.log(averageAge);

// a function that calculates the total number of students who are older than 22.

function countStudentsOlderThan22(students) {
    return students.filter(student => student.age > 22).length;
}
const totalOlderThan22 = countStudentsOlderThan22(students);
console.log(totalOlderThan22);

// a function to search for students by city and return a list of names of students from that city.

function getStudentsByCity(students, city) {
    return students
        .filter(student => student.address.city === city)
        .map(student => student.name);
}

const studentsInNewYork = getStudentsByCity(students, "New York");
console.log(studentsInNewYork); 

//  a function that sorts the students by age in ascending order and prints their names and ages.


function sortStudentsByAge(students) {
    const sortedStudents = students.slice().sort((a, b) => a.age - b.age);
    
    sortedStudents.forEach(student => {
        console.log(`${student.name}, Age: ${student.age}`);
    });
}
sortStudentsByAge(students);

// a function to find the oldest student and print their name, age, and city.

function findOldestStudent(students) {
    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    const oldestStudent = students.reduce((oldest, student) => {
        return (student.age > oldest.age) ? student : oldest;
    });

    console.log(`Name: ${oldestStudent.name}, Age: ${oldestStudent.age}, City: ${oldestStudent.address.city}`);
}

findOldestStudent(students);

// a function that returns a new JSON array with each student's name in uppercase.

function convertStudentNamesToUppercase(students) {
    return students.map(student => {
        return {
            ...student,
            name: student.name.toUpperCase()
        };
    });
}
const uppercasedStudents = convertStudentNamesToUppercase(students);
console.log(uppercasedStudents);

// a function that removes students who are younger than 20 and returns the updated JSON array.

function removeStudentsYoungerThan20(students) {
    return students.filter(student => student.age >= 20);
}
const updatedStudents = removeStudentsYoungerThan20(students);
console.log(updatedStudents);

// a function to transform each student’s country to lowercase and return the updated JSON array.
function convertCountriesToLowercase(students) {
    return students.map(student => {
        return {
            ...student,
            address: {
                ...student.address,
                country: student.address.country.toLowerCase()
            }
        };
    });
}

const UpdatedStudents = convertCountriesToLowercase(students);
console.log(UpdatedStudents);

// a function that returns an array of unique countries represented in the JSON data.

function getUniqueCountries(students) {
    const countries = students.map(student => student.address.country);
    return [...new Set(countries)];
}
const uniqueCountries = getUniqueCountries(students);
console.log(uniqueCountries);

// Createing a function that returns all unique pincodes from the JSON data.

function getUniquePincodes(students) {
    const pincodes = students.map(student => student.address.pincode);
    return [...new Set(pincodes)];
}

const uniquePincodes = getUniquePincodes(students);
console.log(uniquePincodes);

// Write a function that returns a list of students who live in cities with duplicate names (e.g., if there were multiple entries for "Paris").

function getStudentsInDuplicateCities(students) {
    // Step 1: Count occurrences of each city
    const cityCount = students.reduce((acc, student) => {
        const city = student.address.city;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    // Step 2: Filter cities with duplicates
    const duplicateCities = Object.keys(cityCount).filter(city => cityCount[city] > 1);

    // Step 3: Get students living in those duplicate cities
    return students.filter(student => duplicateCities.includes(student.address.city));
}

const studentsInDuplicateCities = getStudentsInDuplicateCities(students);
console.log(studentsInDuplicateCities);

// - Write a function that groups students by country into separate arrays. Return an object where each key is a country and the value is an array of students from that country.

// function convertCountriesToLowercase(students) {
//     return students.map(student => {
//         return {
//             ...student,
//             address: {
//                 ...student.address,
//                 country: student.address.country.toLowerCase()
//             }
//         };
//     });
// }

// const UpdatedStudents = convertCountriesToLowercase(students);
// console.log(UpdatedStudents);

// - Create a function that finds the most common city among all students.

function findMostCommonCity(students) {
    const cityCount = {};

    // Count occurrences of each city
    students.forEach(student => {
        const city = student.address.city;
        cityCount[city] = (cityCount[city] || 0) + 1;
    });

    // Find the city with the maximum count
    let mostCommonCity = null;
    let maxCount = 0;

    for (const city in cityCount) {
        if (cityCount[city] > maxCount) {
            maxCount = cityCount[city];
            mostCommonCity = city;
        }
    }

    return mostCommonCity;
}

const commonCity = findMostCommonCity(students);
console.log(commonCity);


// Write a function that returns a list of students sorted first by country and then by city within each country.

function sortStudentsByCountryAndCity(students) {
    return students.slice().sort((a, b) => {
        // First, sort by country
        if (a.address.country < b.address.country) return -1;
        if (a.address.country > b.address.country) return 1;

        // If countries are the same, sort by city
        if (a.address.city < b.address.city) return -1;
        if (a.address.city > b.address.city) return 1;

        return 0; // If both country and city are the same
    });
}

// Example usage:
const sortedStudents = sortStudentsByCountryAndCity(students);
console.log(sortedStudents);
