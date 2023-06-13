export const courseForm = (key) => { 
    
    return `
    <div class="mainBox course${key}">
        <div class="gradeContainer">
            <input type="text" name="coursecode" class="coursecode" placeholder="Enter course code">
            <div class="d-flex">
                <select name="grade" class="grade">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
                <input type="text" name="unitPoint" class="unitPoint" placeholder="Enter Credit Unit">
            </div>
        </div>
        <div>
            <button class="removeBtn" id="${key}">X</button>
        </div>
    </div>
    `

}