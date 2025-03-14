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