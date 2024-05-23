import React, { useMemo, useCallback, useState } from 'react'
import { useTable, Column } from 'react-table'
import {
  useWeddingExpenses,
  WeddingExpense
} from '../../context/wedding-expenses-context'

interface EditableCellProps {
  value: any
  row: any
  column: any
  updateExpense: (rowIndex: number, columnId: string, value: any) => void
  editable: boolean
}

const EditableCell: React.FC<EditableCellProps> = ({
  value: initialValue,
  row,
  column,
  updateExpense,
  editable
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    setIsEditing(false)
    updateExpense(row.index, column.id, value)
  }

  return (
    <div
      onClick={() => editable && setIsEditing(true)}
      style={{ cursor: editable ? 'pointer' : 'default' }}
    >
      {isEditing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          onBlur={onBlur}
          style={{ width: '100%' }}
        />
      ) : (
        value
      )}
    </div>
  )
}

export const WeddingExpenseList = () => {
  const { expenses, updateExpense, deleteExpense } = useWeddingExpenses()

  const updateCellExpense = useCallback(
    (rowIndex: number, columnId: string, value: any) => {
      const id = expenses[rowIndex]?._id
      updateExpense(id ?? '', { ...expenses[rowIndex], [columnId]: value })
    },
    [expenses, updateExpense]
  )

  const columns: Array<Column<WeddingExpense>> = useMemo(
    () => [
      {
        Header: 'Description',
        accessor: 'description',
        Cell: (props) => (
          <EditableCell
            {...props}
            updateExpense={updateCellExpense}
            editable={true}
          />
        )
      },
      {
        Header: 'Cost',
        accessor: 'cost',
        Cell: (props) => (
          <EditableCell
            {...props}
            updateExpense={updateCellExpense}
            editable={true}
          />
        )
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: (props) => (
          <EditableCell
            {...props}
            updateExpense={updateCellExpense}
            editable={true}
          />
        )
      },
      {
        Header: 'Payment Method',
        accessor: 'paymentMethod',
        Cell: (props) => (
          <EditableCell
            {...props}
            updateExpense={updateCellExpense}
            editable={true}
          />
        )
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: (props) => (
          <EditableCell
            {...props}
            updateExpense={updateCellExpense}
            editable={false}
          />
        )
      },
      {
        Header: 'Delete',
        id: 'delete',
        Cell: ({ row }) => (
          <button
            onClick={() => deleteExpense(row.original._id ?? '')}
            className="button"
          >
            Delete
          </button>
        )
      }
    ],
    [expenses, deleteExpense, updateCellExpense]
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: expenses
    })

  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WeddingExpenseList
