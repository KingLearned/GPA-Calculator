export const removeCoures = () => {
    const removeBtn = document.querySelectorAll('.removeBtn')
    
    removeBtn.forEach(element => {
        element.addEventListener('click', () => {
            const Id = element.id
            document.querySelector(`.course${Id}`).remove()
        })
    });
}
removeCoures()