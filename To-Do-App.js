let ourForm = document.getElementById("myForm");
let ourText = document.getElementById("myText");
let ourList = document.getElementById("myList");

ourForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  createItem(ourText.value);
})

function createItem(x){
  let ourHtml = `<li>${x} <button onClick=DeleteItem(this)>Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", ourHtml)
  ourText.value ="";
  ourText.focus();
}

function DeleteItem(elementToDelete){
  elementToDelete.parentElement.remove();
}