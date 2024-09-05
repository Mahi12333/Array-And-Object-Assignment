const student = {
    name: "Ram",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

// Function to display student information
function displayStudentInfo(studentObj) {
    for (let property in studentObj) {
        console.log(`Property: ${property}, Value: ${studentObj[property]}`);
    }
}

// Call the function with the student object
displayStudentInfo(student);
