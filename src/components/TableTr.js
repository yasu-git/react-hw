import React from 'react'
import TableTb from './TableTb';
import TableTh from './TableTh';

const TableTr = (props) => {

    return (
        <>
            <tr>
                <TableTh text={props.thValue} />
                <TableTb value={props.tbValue} />
            </tr>
        </>
    )
}

export default TableTr
