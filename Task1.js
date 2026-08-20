function studentIntroduction(student) {
  if (student === null || typeof student !== "object" || Array.isArray(student)) {
    return "Invalid";
  }
  else if(!("name" in student) || !("age" in student) || !("course" in student)){
    return "Invalid";
  }
  else{
      return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
  }
}

console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }));
console.log(studentIntroduction({}));
console.log(studentIntroduction("student"));
console.log(studentIntroduction(null));