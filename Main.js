import { calculateGPA } from "./calculateAlgorithm.js";
import { courseForm } from "./courseForm.js";
import { courseGrade } from "./gradeFormular.js";
import { removeCoures } from "./removeCourse.js";

const semesterCourses = document.querySelector('.coursebox')
const addCourseBtn = document.querySelector('.addcourse')
const calculateBtn = document.querySelector('.calculateBtn button')

//add another course to the SEMESTER
let key = 1
addCourseBtn.addEventListener('click', () => {
    key++;    semesterCourses.innerHTML += courseForm(key); courseGrade(); removeCoures();
})

calculateBtn.addEventListener('click', () => {
    calculateGPA()
})
