// Initial array of students
const students = [
    { id: 1, firstName: "Ram", lastName: "xyz", age: 20, grade: "A" },
    { id: 2, firstName: "Raju", lastName: "pqr", age: 22, grade: "B" },
    { id: 3, firstName: "Rakesh", lastName: "kumar", age: 19, grade: "A" }
    // Add more students as needed
];

// Function to add a new student to the array
function addStudent(student) {
    students.push(student);
}

// Function to update a student's information based on their id
function updateStudent(id, updatedInfo) {
    let studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    }
}

// Function to delete a student based on their id
function deleteStudent(id) {
    students.splice(students.findIndex(student => student.id === id), 1);
}

// Function to find students by grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// Function to calculate the average age of all students
function calculateAverageAge() {
    let totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Testing the functions
console.log("Initial Students:", students);

// Add a new student
addStudent({ id: 4, firstName: "Alice", lastName: "Johnson", age: 21, grade: "B" });
console.log("After Adding Student:", students);

// Update a student's information
updateStudent(1, { age: 21 });
console.log("After Updating Student:", students);

// Delete a student
deleteStudent(3);
console.log("After Deleting Student:", students);

// Find students by grade
console.log("Students with Grade 'A':", findStudentsByGrade("A"));

// Calculate average age
console.log("Average Age of Students:", calculateAverageAge());
