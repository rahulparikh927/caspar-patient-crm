import { ColumnDefinitionType } from ".";

type TableRowsProps<T> = {
  data: T[];
  columns: ColumnDefinitionType[];
  onRowClick?: (rowData: T) => void;
};

const TableRows = <T extends any>({
  data,
  columns,
  onRowClick,
}: TableRowsProps<T>) => {
  const rows = data.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {columns.map((column, colIndex) => {
          return (
            <td
              key={`cell-${colIndex}`}
              onClick={() => onRowClick?.(row)}
              className="border border-slate-700 text-slate-400 p-4"
            >
              {row[column.key as keyof T] as string}
            </td>
          );
        })}
      </tr>
    );
  });

  const noDataFound = () => {
    return (
      <tr>
        <td
          className="border border-slate-700 p-4 text-slate-400 text-center"
          colSpan={4}
        >
          No patient found
        </td>
      </tr>
    );
  };

  return <tbody>{data.length ? rows : noDataFound()}</tbody>;
};

export default TableRows;
