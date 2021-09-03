import React from 'react'
import TableTb from './TableTb';
import Link from './Link';

const ShowTable = (props) => {

    function textCheck(text) {
        if (text === "") return "情報なし";
        return text;

    }

    //textに追加するモノがあれば追加して返す関数
    function textAdd(text, value) {
        if (value === null) {
            return text;
        }
        return text + " " + value;
    }

    //著者を1名から3名の間追加して返す
    function resultAuthors(author1, author2, author3) {
        let resultAuthors = '';

        resultAuthors = textAdd(resultAuthors, author1);
        resultAuthors = textAdd(resultAuthors, author2);
        resultAuthors = textAdd(resultAuthors, author3);
        return resultAuthors;
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>著者</th>
                        <TableTb value={textCheck(resultAuthors(
                            props.book.author1,//第1著者
                            props.book.author2,//第2著者
                            props.book.author3//第3著者
                        ))} />
                    </tr>
                    <tr>
                        <th>発売日</th>
                        <TableTb value={textCheck(props.book.publishedDate)} />
                    </tr>
                    <tr>
                        <th>出版社</th>
                        <TableTb value={textCheck(props.book.publisher)} />
                    </tr>
                    <tr>
                        <th>ページ数</th>
                        <TableTb value={textCheck(props.book.pageCount)} />
                    </tr>
                    <tr>
                        <th>定価</th>
                        <TableTb value={textCheck(props.book.listPrice)} />
                    </tr>
                    <tr>
                        <th>ISBNコード</th>
                        <TableTb value={textCheck(props.book.isbn_10)} />
                    </tr>
                    <tr>
                        <th>販売サイト</th>
                        <Link Link={props.book.infoLink} />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ShowTable
