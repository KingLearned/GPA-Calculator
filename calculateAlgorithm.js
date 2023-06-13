const gradePoint = (Grade) => {
    let Point = 0
    switch (Grade) {
        case 'A':
            Point = 5
            break;
        case 'B':
            Point = 4
            break;
        case 'C':
            Point = 3
            break;
        case 'D':
            Point = 2
            break;
        case 'E':
            Point = 1
            break;
        case 'F':
            Point = 0
            break;
        default:
            break;
    }

    return Point

}

const calculateGrade = () => {
    const AllCourses = document.querySelectorAll(`.grade`)
    const AllPoints = document.querySelectorAll(`.unitPoint`)

    let TotalPoints = 0


    for (let i = 0; i < AllCourses.length; i++) {
        for (let n = 0; n < AllPoints.length; n++) {
            if(i == n){
                TotalPoints += (gradePoint(AllCourses[i].value)*Number(AllPoints[n].value))  
            }
        }
    }

    return TotalPoints

}

const calculateUnits = () => {
    const AllPoints = document.querySelectorAll(`.unitPoint`)

    let TotalUnits = 0
    AllPoints.forEach(EachPoint => {
        TotalUnits += Number(EachPoint.value)
    });

    return TotalUnits
}


export const calculateGPA = () => {
    $('.unitTotal h5').html(calculateGrade()+'.00')
    $('.semesterTotal h5').html(calculateUnits()+'.00')
    $('.gpaResult h1').html((calculateGrade()/calculateUnits()).toFixed(2))
}