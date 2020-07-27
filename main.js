const fs = require('fs');
const dataReadSync = fs.readFileSync('../students.json');
const data = JSON.parse(dataReadSync);

console.log(data.students);
console.log(data.students[0]);

const getStudentByIndex = function(index) {
  return data.students[index];
}

const getStudentByName = function(name) {
  for(let student of data.students) {
    if(student.name === name) {
      return student;
    }
  }

  return -1;
}


if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
