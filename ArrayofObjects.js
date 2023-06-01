let studentRecords = [
	{ name: 'John', id: 123, marks: 98 },
	{ name: 'Baba', id: 101, marks: 23 },
	{ name: 'yaga', id: 200, marks: 45 },
	{ name: 'Wick', id: 115, marks: 75 },
];
// We are interested in retrieving only the students' names; all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']
//method 1
const arr = [];
for (let key in studentRecords)
	arr.push(studentRecords[key].name.toUpperCase());
console.log(arr);
//method 2
result = studentRecords.map((i) => i.name);
console.log(result);

// Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]
//method 1
console.log(studentRecords.filter((i) => i.marks > 50));

//method 2
const arr1 = [];
for (let key in studentRecords) {
	if (studentRecords[key].marks > 50) arr1.push(studentRecords[key]);
}
console.log(arr);

// Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.
console.log(studentRecords.filter((i) => i.marks > 50 && i.id > 120));

// Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
console.log(studentRecords.reduce((sum, k) => sum + k.marks, 0));

// This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
console.log(studentRecords.filter((i) => i.marks > 50).map((i) => i.name));

// This time we are required to print the sum of marks of the students with id > 120.
console.log(
	studentRecords.filter((i) => i.id > 120).reduce((sum, i) => sum + i.marks, 0)
);

// This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
//method 1
result = studentRecords
	.filter((i) => i.marks < 50)
	.map((i) => i.marks + 15)
	.filter((i) => i > 50)
	.reduce((sum, i) => sum + i, 0);
console.log(
	studentRecords
		.filter((i) => i.marks > 50)
		.reduce((sum, i) => sum + i.marks, result)
);

//method 2
console.log(
	studentRecords
		.map((student) => {
			if (student.marks < 50) {
				student.marks += 15;
			}
			return student;
		})
		.filter((student) => student.marks > 50)
		.reduce((sum, student) => sum + student.marks, 0)
);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
//method 1
const obj1 = { name: 'Anu', class: 4, rollNo: 1 };
const obj2 = { name: 'Anusha', class: 4, rollNo: 2 };
let resultArr = [{ ...obj1 }, { ...obj2 }];
console.log(resultArr);

//method 2
let studentDetails = [
	{ name: 'Anu', class: 4, rollNo: 1 },
	{ name: 'Anusha', class: 4, rollNo: 2 },
];
console.log(studentDetails);
