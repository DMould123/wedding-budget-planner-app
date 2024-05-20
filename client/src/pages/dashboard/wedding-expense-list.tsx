import { useMemo, useState } from 'react'
import {
  WeddingExpense,
  useWeddingExpenses
} from '../../context/wedding-expenses-context'
import { useTable, Column, CellProps } from 'react-table'

interface EditableCellProps extends CellProps<WeddingExpense> {
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
      ) : typeof value === 'string' ? (
        value
      ) : (
        value.toString()
      )}
    </div>
  )
}

export const WeddingExpenseList = () => {
  const { expenses, updateExpense, deleteExpense } = useWeddingExpenses()

  const updateCellExpense = useMemo(
    () => (rowIndex: number, columnId: string, value: any) => {
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
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
