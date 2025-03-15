function renderBooks(){
    let bookSectionContentRef = document.getElementById("bookSection");
    bookSectionContentRef.innerHTML ="";

    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        bookSectionContentRef.innerHTML += getBookTemplate(indexBooks);
        renderCommits(indexBooks);
    }
}



function renderCommits(indexBooks){
    let commitContantRef = document.getElementById(`commitContant${indexBooks}`);
    commitContantRef.innerHTML = "";

    for (let indexCommits = 0; indexCommits < books[indexBooks].comments.length; indexCommits++) {
        commitContantRef.innerHTML += getCommitsTemplate(indexCommits, indexBooks)
    }
}

function likeBook(indexBooks, amount, element1, element2){
    let arrayLikeBook = books[indexBooks].likes + amount;
    books[indexBooks].likes = arrayLikeBook;
    renderBooks();
    document.getElementById(element1 + indexBooks).classList.add("d_none");
    document.getElementById(element2 + indexBooks).classList.remove("d_none");
}

function addComment(indexBooks, indexCommits){
    let arrayCommentsName = books[indexBooks].comments[indexCommits].name;
    let arrayCommitsComment = books[indexBooks].comments[indexCommits].comment;
    
}