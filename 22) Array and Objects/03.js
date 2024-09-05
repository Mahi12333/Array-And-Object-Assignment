// a) Create a student object
let student = {
    name: 'John',
    age: 20
};

// b) Check if the student object is extensible
let extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'
let teacher = {
    subject: 'Math'
};

// d) Seal the teacher object
Object.seal(teacher);

// e) Check if the teacher object is sealed
let sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log("Extensible Status:", extensibleStatus);
console.log("Sealed Status:", sealedStatus);
