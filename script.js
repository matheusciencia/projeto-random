function generateNumber(){
    const min = Math.ceil(document.querySelector('#first-input').value)
    const max = Math.floor(document.querySelector('#last-input').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    alert (result)
}
