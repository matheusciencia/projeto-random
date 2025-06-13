function generateNumber(){
    const min = Math.ceil(document.querySelector('#first-input').value)
    const max = Math.floor(document.querySelector('#last-input').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    if( min > max ) {
        alert ("O valor mínimo deve ser MENOR que o valor máximo")
    } else {
        alert (result)
    }
}
