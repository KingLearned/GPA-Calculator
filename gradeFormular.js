export const courseGrade = () => {
    const EachCourse = document.querySelectorAll(`.grade`)
    const CourseCode = document.querySelectorAll(`.coursecode`)
    const EachPoint = document.querySelectorAll(`.unitPoint`)

    EachCourse.forEach(Course => {
        Course.addEventListener('change', () => {
            for (let i = 0; i < Course.length; i++) { Course[i].removeAttribute('selected', '') }
            Course.options[Course.selectedIndex].setAttribute('selected', '')
        })
    });
    
    CourseCode.forEach(Code => {
        Code.addEventListener('keyup', () => { Code.setAttribute('value', Code.value) }) //Retainig Code
    });

    EachPoint.forEach(Point => {
        Point.addEventListener('keyup', () => { Point.setAttribute('value', Point.value) }) //Retaining Unit Point
    });
      
}
courseGrade()