const students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 21},
    {name: "Jane", age: 20}
]

const sumReducer = (acc, student) => {
    return acc + student.age;
}

const calculateAverage = (students) => {
    let sum = students.reduce(sumReducer, 0);
    return sum / students.length;
}

const waitForSeconds = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

const getAverageAge = async () => {
    console.log('calculation start')
    let result = calculateAverage(students)
    await waitForSeconds(2000)
    console.log('second call started')
    await waitForSeconds(2000)
    console.log('second call finished')
    console.log('third call started')
    await waitForSeconds(1000)
    console.log(`age is ${result}`)
    console.log('third call finished')
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
    getAverageAge()
}