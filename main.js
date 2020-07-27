const fs = require('fs');
const dataReadSync = fs.readFileSync('../students.json');
const data = JSON.parse(dataReadSync);

console.log(data);
console.log(data.students[0]);

const getStudentByIndex = function(index) {
  return data.students[index];
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
