// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botao

// Executar uma acao
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean true or false

    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function(field) {

        field.value = ""
    })



   // Colocar na pagina
   document.querySelector('#schedule-items').appendChild(newFieldContainer)

}


 