var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var allBooks = [];

  if (!localStorage.getItem("book")) {
    allBooks = [];
    localStorage.setItem("book", JSON.stringify(allBooks));
} else {
    allBooks = JSON.parse(localStorage.getItem("book"));
}
displayAllBooks()

function deleteBook(index) {
   allBooks.splice(index, 1);
   localStorage.setItem("book", JSON.stringify(allBooks))
   displayAllBooks();  
}
function clear() {
    siteUrl.value = '';
    siteName.value = '';
 }
 function displayAllBooks() {
    var cartona = '';
    for (var i = 0; i < allBooks.length; i++) {
       cartona += `
        <tr>
            <td>${i + 1}</td>
            <td>${allBooks[i].Name}</td>
            <td>
                <a href="${allBooks[i].Url}" target="_blank" class="btn btn1">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                </a>
            </td>
            <td>
                <button onclick="deleteBook(${i})" class="btn btn2">
                    <i class="fa-solid fa-trash-can pe-2"></i>Delete
                </button>
            </td>
        </tr>
        `;
    }
    document.getElementById('data').innerHTML = cartona;
 }
 
function addBook() {
    if(!siteNameValidation() || !siteUrlValidation()){
        showDialog();
        return;   
    }
   var book = {
      Name: siteName.value,
      Url: siteUrl.value
   } 
   allBooks.push(book);
   localStorage.setItem("book", JSON.stringify(allBooks))
   console.log(allBooks);
   displayAllBooks();
   clear();
}
function siteNameValidation()
{
  var Regex  = /[\w]{3,20}/;
   if(Regex.test(siteName.value) )
   {
      siteName.classList.add('is-valid')
     siteName.classList.remove('is-invalid')
      return true;   
   }
   else{
    siteName.classList.add('is-invalid')
    siteName.classList.remove('is-valid')
    return  false;
   }
  
}
function siteUrlValidation() {
    var Regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
    if (Regex.test(siteUrl.value)) {
      siteUrl.classList.add('is-valid');
      siteUrl.classList.remove('is-invalid');
      return true;
    } else {
      siteUrl.classList.add('is-invalid');
      siteUrl.classList.remove('is-valid');
      return false;
    }
  }
  

  function showDialog() {
          
    alartDialog.showModal();
}

function closeDialog() {
    alartDialog.close();
}





