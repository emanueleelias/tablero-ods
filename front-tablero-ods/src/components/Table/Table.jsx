import React from 'react'
import { useTable, usePagination } from 'react-table'
import { BiPencil, BiTrash, BiChevronsLeft, BiChevronsRight, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./table.scss";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 1 },
    },
    usePagination
  )

  // Render the UI for your table
  return (
        <>
            <br />
            <div className='container table__container'>
                <h3 className='table__container-title'>Tabla titulo</h3>
                <table className='table__container-table' {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                                <th className='actions-title'>Acciones</th>
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                    <th className='actions-icons'>
                                        <BiPencil />
                                        <BiTrash />
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* 
                    Pagination can be built however you'd like. 
                    This is just a very basic UI implementation:
                */}
                <div className="pagination">

                    <span className='pagination__text'>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>

                    <div className='pagination__icons'>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            { <BiChevronsLeft /> }
                        </button>{' '}
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            { <BiChevronLeft /> }
                        </button>{' '}
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            { <BiChevronRight /> }
                        </button>{' '}
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            { <BiChevronsRight /> }
                        </button>{' '}
                    </div>
                    
                    <span className='pagination__input'>
                        Go to page{' '}
                            <input
                                type="number"
                                defaultValue={pageIndex}
                                value="1"
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                }}
                                style={{ width: '100px' }}
                            />
                    </span>{' '}
                </div>
            </div>
        </>
    )
}

export default Table;

            {/* <pre>
                <code>
                {JSON.stringify(
                    {
                    pageIndex,
                    pageSize,
                    pageCount,
                    canNextPage,
                    canPreviousPage,
                    },
                    null,
                    2
                )}
                </code>
            </pre> */}