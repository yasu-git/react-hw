import React from 'react'
import Link from './Link';
import TableTh from './TableTh';
import TableTr from './TableTr';


const ShowTable = (props) => {

    function textCheck(text) {
        if (text === "") return "情報なし";
        return text;

    }

    //textに追加するモノがあれば追加して返す関数
    function textAdd(text, value) {
        if (value === null || value === null) {
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
                    <TableTr thValue="著者" tbValue={textCheck(resultAuthors(
                        props.book.author1,//第1著者
                        props.book.author2,//第2著者
                        props.book.author3//第3著者
                    ))}
                    />
                    <TableTr thValue="発売日" tbValue={textCheck(props.book.publishedDate)} />
                    <TableTr thValue="出版社" tbValue={textCheck(props.book.publisher)} />
                    <TableTr thValue="ページ数" tbValue={textCheck(props.book.pageCount)} />
                    <TableTr thValue="定価" tbValue={textCheck(props.book.listPrice)} />
                    <TableTr thValue="ISBNコード" tbValue={textCheck(props.book.isbn_10)} />
                    <tr>
                        <TableTh text="販売サイト" />
                        <Link Link={props.book.infoLink} />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ShowTable
