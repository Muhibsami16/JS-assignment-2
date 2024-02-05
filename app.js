//Question no 1:

     
     a = 10;

     
    console.log("The value of a is: " + a);

   
    console.log("The value of ++a is: " + ++a); // Pre-increment: increment 'a' first, then display its value
    console.log("Now the value of a is: " + a);

    console.log("The value of a++ is: " + a++); // Post-increment: display 'a' first, then increment its value
    console.log("Now the value of a is: " + a);

    console.log("The value of --a is: " + --a); // Pre-decrement: decrement 'a' first, then display its value
    console.log("Now the value of a is: " + a);

    console.log("The value of a-- is: " + a--); // Post-decrement: display 'a' first, then decrement its value
    console.log(`Now the value of a is: ${a}`);

//Question no 2:
let a = 2;
let b = 1;
document.write("a is : = 2");
document.write("<br>");
document.write("b is : = 1");
document.write("<br>");
document.write("<br>");

console.log("--a is:", --a);
console.log("--a - --b is:" , --a - --b);
console.log("--a - --b + ++b" , --a - --b + ++b );
console.log("--a - --b + ++b + b--" , --a - --b + ++b + b-- );
document.write("Result is : 3");
//Question no 3:
function greetUser() {
    var name = prompt("Please enter your name: ");
    console.log("Hello, {name} ,Nice to meet you.");
}

greetUser();
//Question No 4:
let num = prompt("Enter any number") || 5;
{
    console.log(num , " * 1  =" , num * 1);
    console.log(num , " * 2  =" , num * 2);
    console.log(num , " * 3  =" , num * 3);
    console.log(num , " * 4  =" , num * 4);
    console.log(num , " * 5  =" , num * 5);
    console.log(num , " * 6  =" , num * 6);
    console.log(num , " * 7  =" , num * 7);
    console.log(num , " * 8  =" , num * 8);
    console.log(num , " * 9  =" , num * 9);
    console.log(num , " * 10 =" , num * 10);
}
//Question No 5:

document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const subjects = [
        document.getElementById('subject1').value,
        document.getElementById('subject2').value,
        document.getElementById('subject3').value,
    ];

    const totalMarks = Array(3).fill(100);

    const marks = [
        parseInt(document.getElementById('marks1').value),
        parseInt(document.getElementById('marks2').value),
        parseInt(document.getElementById('marks3').value),
    ];

    let totalObtainedMarks = 0;
    let percentage = 0;

    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        const subjectCell = document.createElement('td');
        subjectCell.textContent = subjects[i];
        row.appendChild(subjectCell);

        const totalMarksCell = document.createElement('td');
        totalMarksCell.textContent = totalMarks[i];
        row.appendChild(totalMarksCell);

        const obtainedMarksCell = document.createElement('td');
        obtainedMarksCell.textContent = marks[i];
        row.appendChild(obtainedMarksCell);

        totalObtainedMarks += marks[i];

        percentage = (totalObtainedMarks / (3 * 100)) * 100;

        const percentageCell = document.createElement('td');
        percentageCell.textContent = percentage.toFixed(2) + '%';
        row.appendChild(percentageCell);
