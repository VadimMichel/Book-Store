function getBookTemplate(indexBooks){
    return `
        <div id="bookContent">
          <h2>${books[indexBooks].name}</h2>
          <div class="book-image-area">
              <img src="./assets/img/book_image.png" alt="book_image">
          </div>
          <div class="book-info">
            <div class="price-like-area">
              <span id="bookPrice">
                  ${books[indexBooks].price.toFixed(2)} €
              </span>
              <div class="like-area">
                <span id="likesAmountContent">${books[indexBooks].likes}</span>
                <div id="heartContent${indexBooks}"></div>
              </div>
            </div>
            <table>
               <tr>
                <td>Author</td>
                <td>: ${books[indexBooks].author}</td>
               </tr>
               <tr>
                <td>Published year</td>
                <td>: ${books[indexBooks].publishedYear}</td>
               </tr>
               <tr>
                <td>genre</td>
                <td>: ${books[indexBooks].genre}</td>
               </tr>
            </table>
            <div class="comments-area">
              <h3>Comments:</h3>
              <table id="commitContant${indexBooks}" class="comments-section">
              
              </table>
            </div>
            <div class="comments-input">
                <input id="inputContent${indexBooks}" type="text" placeholder="Write your comment ...">
                <img onclick="addComment(${indexBooks})" src="./assets/img/paper_airplane.png" alt="paper_airplane">
            </div>
          </div>
        </div>
    `
}

function getCommitsTemplate(indexCommits, indexBooks){
  return `
    <tr>
      <td>[${books[indexBooks].comments[indexCommits].name}]</td>
      <td>${books[indexBooks].comments[indexCommits].comment}</td>
    </tr>
  `
}

function getHeartTemplate(indexBooks, image){
  return `
    <img id="heartImage${indexBooks}" onclick="likeBook(${indexBooks})" src="./assets/img/${image}.png" alt="empty_heart"></img>
  `
}