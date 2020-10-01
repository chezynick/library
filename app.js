//create myLibrary array
let myLibrary = [];
 let shelf = document.getElementById('shelf');
 //function for creating book- constructor
function book (title, author, genre, haveread){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.haveread = haveread;
    
};
    function addbook(){
         shelf.innerHTML = '';
         //for each array create a box and display array title
    for(let i=0;i < myLibrary.length;i++){
        //create a box to detail book and to store delete button
        let box = document.createElement('div');
        let innerbox = document.createElement('div');
        let delButton = document.createElement('button');
        let readButton = document.createElement('button');
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
        readButton.innerText = 'N'
        readButton.value = myLibrary[i].title;
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
    const book1 =  new book('HTML for Dummies', 'Andy Harris', 'programming', true);
    myLibrary.push(book1);
    const book2 = new book('The Travel Book', 'Lonely Planet', 'Travel', false);
    myLibrary.push(book2);
    const book3 = new book('1001 Walks of Britain','The AA','reference',true);
    myLibrary.push(book3);

    //new book button 
    let add = document.getElementById('newBookButton');
    add.addEventListener('click', addBookToLibrary);
    //new book form
    function addBookToLibrary(){
        let a = prompt('What is the name of the book?');
        let b = prompt('What is the Author name?');
        let c = prompt('what type of book is it?');
        let d = true;
 
    
       let createdBook =  new book(a, b, c, d);
       myLibrary.push(createdBook);
       addbook();
       details();
       readBut();
       deleteBut();

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
     
    if(result.haveread === true){
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

    if(readButton[i].innerText == 'N'){
        readButton[i].innerText = 'Y'
    } else {
        readButton[i].innerText = 'N'
    }

    
}
};
};
                //call all functions
        addbook();
        details();
        readBut();
        deleteBut();
   
