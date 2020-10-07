//create myLibrary array
         myLibrary = [];
 let shelf = document.getElementById('shelf');
 //function for creating book- constructor
class book {
    constructor (title, author, genre, haveread){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.haveread = haveread;
    }; 
};
    function addbook(){
         shelf.innerHTML = '';
         //for each array create a box and display array title
    for(let i=0;i < myLibrary.length;i++){
        //create a box to detail book and to store delete button
        let box = document.createElement('div');
        let innerbox = document.createElement('div');
        let delButton = document.createElement('button');
        let readButton = document.createElement('input');
        let buttonLabel = document.createElement('label');
        //add class to box and button
        delButton.classList.add('delButton')
        innerbox.classList.add('book');
        box.classList.add('bookHolder');
        readButton.classList.add('tickbox');
        //add inner text
        delButton.innerText = 'X';
        innerbox.innerText = myLibrary[i].title;
        innerbox.value = myLibrary[i];
        delButton.value = myLibrary[i].title;
        buttonLabel.innerText = 'Read?';
        readButton.type = 'checkbox';
        readButton.value = myLibrary[i].title;
        if(myLibrary[i].haveread===true){
            readButton.checked = true;
        }
        //attach delButton to div
        box.appendChild(innerbox);
        box.appendChild(delButton);
        box.appendChild(buttonLabel);
        box.appendChild(readButton);
        //attach box to shelf
        shelf.appendChild(box); 

};
};


//create a few books
    const book1 =  new book('HTML for Dummies', 'Andy Harris', 'programming', false);
    myLibrary.push(book1);
    const book2 = new book('The Travel Book', 'Lonely Planet', 'Travel', false);
    myLibrary.push(book2);
    const book3 = new book('1001 Walks of Britain','The AA','reference',true);
    myLibrary.push(book3);
    addbook();
    //new book button 
    let add = document.getElementById('newBookButton');
    let title = document.getElementById('textTitle');
    let author = document.getElementById('textAuthor');
    let genre = document.getElementById('textGenre');
    add.addEventListener('click', addBookToLibrary);
    //new book form
    function addBookToLibrary(){
    let form = document.getElementById('newForm');
    form.style.display = 'flex'
    //cancel button function
    let cancel = document.getElementById('cancel');
    cancel.addEventListener('click', cancelBook)
    function cancelBook(){
        title.value = '';
        author.value = '';
        genre.value = ''; 
        form.style.display = 'none';
        
    }
    //reset buttonfunction
    let reset = document.getElementById('reset');
    reset.addEventListener('click', resetBut)
    function resetBut(){
        title.value = '';
        author.value = '';
        genre.value = ''; 
    }

    let newBook = document.getElementById('submit');
    newBook.addEventListener('click', addNewBook);
        function addNewBook(){
            //get values from form

            let a = title.value;
            let b = author.value;
            let c = genre.value;
            let d = false;
            if(a === ''||b===''||c===''){
                form.style.display = 'none';   
            } else {
            let createdBook =  new book(a, b, c, d);
       myLibrary.push(createdBook);
       title.value = '';
       author.value = '';
       genre.value = '';             
       addbook();
       details();
       readBut();
       deleteBut();
            };
    };
};

//expand details for each book
function details(){
    let bookSelect = document.querySelectorAll('.book')
        for(let i= 0; i <bookSelect.length;i++) {
        bookSelect[i].addEventListener('click', result);
        function result(){
//loop through boxes to find matching array item           
    let result =  myLibrary.filter(name => name.title == bookSelect[i].innerText)
//get result box from doc            
    let resultBox = document.getElementById('details');
        resultBox.style.display = 'block';
    let readNotRead = '';
     
    if(myLibrary[i].haveread === true){
        readNotRead = 'Y'
    }else {
        readNotRead = 'N'
    }
//add resultBox to page    
    document.getElementById('bookTitle').innerText = 'Book Title : ' + result[0].title;
    document.getElementById('authorName').innerText = 'Authors Name : ' + result[0].author;
    document.getElementById('genreType').innerText = 'Genre : ' + result[0].genre;
    document.getElementById('readThis').innerText = 'Read Y/N = ' + readNotRead;
    
//remove resultBox from page and restart details function    
      resultBox.addEventListener('click', closebox);
      function closebox(){
        resultBox.style.display = 'none';          
      };

};
};   
};

//delete button function
      
      function deleteBut(){
    let deleteButton = document.querySelectorAll('.delButton');
//loop through delete buttons to find one that matches 
    for(let i=0;i < deleteButton.length;i++){
        deleteButton[i].addEventListener('click', delwhich)
function delwhich(){
  
   myLibrary = myLibrary.filter(name => name.title !== deleteButton[i].value);
addbook();
details();
readBut();
deleteBut();
      };
    };
};

//read button function

function readBut(){
let readButton = document.querySelectorAll('.tickbox');

//loop through delete buttons to find one that matches 
for(let i=0;i < readButton.length;i++){
  readButton[i].addEventListener('click', isread)
function isread(){
    if(readButton[i].checked === true){
            myLibrary[i].haveread = true;   
} else{
            myLibrary[i].haveread = false;
};
};
};
};
// add sort button functionality -by title
    let sortTitle = document.getElementById('title');
        sortTitle.addEventListener('click', sorty);
        function sorty(){
            
            myLibrary = myLibrary.sort((a,b) => a.title > b.title ? 1 : -1);
            addbook();
            details();
            readBut();
            deleteBut();
        }
//sort by author name
        let sortAuthor = document.getElementById('author');
        sortAuthor.addEventListener('click', sortName);
        function sortName(){
            myLibrary = myLibrary.sort((a,b) => a.author > b.author ? 1 : -1);
            addbook();
            details();
            readBut();
            deleteBut();
        }
//sort by genre
        let sortGenre = document.getElementById('genre');
        sortGenre.addEventListener('click', sortyGenre);
        function sortyGenre(){
            
            myLibrary = myLibrary.sort((a,b) => a.genre > b.genre ? 1 : -1);
            addbook();
            details();
            readBut();
            deleteBut();
        }
//sort by read or not
        let readSort = document.getElementById('readBook');
        readSort.addEventListener('click', sortyRead);
        function sortyRead(){

            myLibrary = myLibrary.sort((a,b) => a.haveread === b.haveread? 0 : a ? -1 : 1);
            addbook();
            details();
            readBut();
            deleteBut();
        }

                //call all functions    
        details();
        readBut();
        deleteBut();



        

   
