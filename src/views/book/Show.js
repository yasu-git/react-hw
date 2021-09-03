import React from 'react';
import Explanation from '../../components/Explanation';
import Img from '../../components/Img';
import ShowTable from '../../components/ShowTable';

const Show = () => {

    const book = {
        title: "ワンピース",
        price: 410,
        author1: "尾田栄一郎",
        author2: "",
        author3: "",
        publishedDate: 1997,
        smallThumbnail: "http://books.google.com/books/content?id=z3k2AQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=z3k2AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: 1997,
        publisher: "集英社",//集英社
        pageCount: 207,
        listPrice: 410,//410
        isbn_10: "4088725093",
        ISBN_13: "9784088725093",
        description: "Young Monkey D. Luffy searches the oceans with his Straw Hat Pirates for the world's ultimate treasure, known as One Piece, in order to become the next Pirate King.",
        infoLink: "http://books.google.co.jp/books?id=D8BvtAEACAAJ&dq=4088725093&hl=&source=gbs_api"
    }

    return (
        <div id="book_main">

            <h2>Book 詳細ページ</h2>

            <h2>{book.title}</h2>
            <hr />
            <br />
            <br />
            <Img imageSrc={book.thumbnail} />
            <div id="main_book_right">
                <h3>商品情報</h3>
                <hr />
                <ShowTable book={book} />
                <Explanation description={book.description} />
            </div>
        </div>
    )
}

export default Show




