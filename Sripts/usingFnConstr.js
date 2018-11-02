(function(){
var book = function(bookId, bookName, author,price){
    this.bookId = bookId;
    this.bookName = bookName;
    this.author = author;
    this.price = price;

}

book.prototype.toString = function(){
    return this.bookName +' - ' + this.author;
}

book.prototype.discount = function(){
    return this.price* 0.10;
}

var javaBook = new book('101','Java','A',450);
var dotNetBook = new book('102','DotNet','B',350);

var bookList = [javaBook,dotNetBook];

bookList.forEach(function(eachBook,idxx){
    console.log(idxx++);
    console.log(eachBook.toString());
}
);

})();