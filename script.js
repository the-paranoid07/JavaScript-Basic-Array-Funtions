/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function (element) {
    if (element.profession === "developer") 
    console.log(element);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (element) {
    if (element.profession === "developer") 
    console.log(element);
  });
}

function addData() {
  //Write your code here, just console.log
  let obj =  {id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  // arr.forEach(function(element , index ){
  //   if(element.profession === "admin"){
  //     arr.splice(index , 1);
  //   }
  // });

  arr=arr.filter(function(element){
    return element.profession !== "admin";
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "himanshu", age: "21", profession: "engineer" },
    { id: 6, name: "anish", age: "22", profession: "developer" },
    { id: 7, name: "nishcal", age: "20", profession: "artist" },
  ];
  let result=arr.concat(arr2);
  console.log(result);
}