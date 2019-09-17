const container =document.querySelector(".container")
let id = 0; 
document.querySelector("#btn-create").addEventListener("click", () => {
   id++
   const textField = document.querySelector(".text-field").value
    container.innerHTML += createDOM(textField)
})



document.querySelector(".container").addEventListener("click", (event) => {
   if(event.target.id.startsWith("delete--")) {
      let buttonId = event.target.id.split("--")[1]
      let article = document.querySelector(`#article--${buttonId}`) 
      article.remove(); 
       
   }
})

createDOM = (textField) => {
    return ` 
    <article class="card" id="article--${id}" >
    <div>
    ${textField}
    </div>
    <div>
    <button id="delete--${id}">Delete This Card</button>
    </div>
    </article>`
}