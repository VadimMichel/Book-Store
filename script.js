function renderBooks(){
    let bookSectionContentRef = document.getElementById("bookSection");
    bookSectionContentRef.innerHTML ="";

    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        bookSectionContentRef.innerHTML += getBookTemplate(indexBooks);
        renderCommits(indexBooks);
        renderHeart(indexBooks);
    }
}

function renderHeart(indexBooks){
    let heartContentRef = document.getElementById(`heartContent${indexBooks}`);
    heartContentRef.innerHTML ="";
    if(books[indexBooks].liked == true){
        heartContentRef.innerHTML = getHeartTemplate(indexBooks, "heart");
    }
    else{
        heartContentRef.innerHTML = getHeartTemplate(indexBooks, "empty_heart");
    }
}

function renderCommits(indexBooks){
    let commitContantRef = document.getElementById(`commitContant${indexBooks}`);
    commitContantRef.innerHTML = "";

    for (let indexCommits = 0; indexCommits < books[indexBooks].comments.length; indexCommits++) {
        commitContantRef.innerHTML += getCommitsTemplate(indexCommits, indexBooks)
    }
}

function likeBook(indexBooks){
    if(books[indexBooks].liked == true){
        books[indexBooks].likes -= 1;
        books[indexBooks].liked = false;
    }
    else{
        books[indexBooks].likes += 1
        books[indexBooks].liked = true;
    }
    renderBooks();
}

function addComment(indexBooks){
    let arrayComments = books[indexBooks].comments;
    let inputContantRef = document.getElementById(`inputContent${indexBooks}`);
    let inputContentValue = inputContantRef.value;
    let newComment = {"name": "Vadim", "comment": inputContentValue};

    if(inputContentValue != ""){
    arrayComments.push(newComment);
    inputContentValue ="";
    renderBooks();}
}