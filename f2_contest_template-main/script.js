/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log(developerNames);
}


function PrintDeveloperbyForEach() {
  const developerNames = [];
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      developerNames.push(employee.name);
    }
  });
  console.log(developerNames);
}


function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}


function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}


function concatenateArray() {
  const newArray = [
    { id: 5, name: "Michael", age: "25", profession: "manager" },
    { id: 6, name: "Emma", age: "22", profession: "designer" },
    { id: 7, name: "Ryan", age: "24", profession: "developer" }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}

