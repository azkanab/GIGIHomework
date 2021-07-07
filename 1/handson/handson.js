const students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 21},
    {name: "Jane", age: 20}
]

const sumReducer = (acc, student) => {
    return acc + student.age;
}

const averageAge = (students) => {
    let sum = students.reduce(sumReducer, 0);
    return sum / students.length;
}

const studentDiv = document.querySelector('.students')

students.forEach((student) => {
    studentDiv.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
        </tr>
    `
});

function handleClick() {
    let average = averageAge(students)
    console.log(average)
}