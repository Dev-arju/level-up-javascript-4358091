// Write your code here
function getStudents(classroom){
  const { hasTeachingAssistant, classlist } = classroom
  let teacher, teachingAssistant, students;

  if(hasTeachingAssistant){
    [teacher, teachingAssistant, ...students] = classlist
  }else{
    [teacher, ...students] = classlist
  }
  return students
}

const classroom = {
  classlist: ['Rashid', 'Ramu', 'Alan', 'Nihal', 'Athif'],
  hasTeachingAssistant: true
}

console.log(getStudents(classroom));