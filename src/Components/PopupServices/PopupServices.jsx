/* eslint-disable jsx-a11y/anchor-is-valid */
import "./PopupServices.css";
import { useTable } from "react-table";
import { tablePopupPrice } from "../../utils/arrays";
import MOCK_DATA from "../../utils/MOCK_DATA.json";
import { useMemo } from "react";

export default function PopupServices({
  active,
  setActive,
}) {
  const columns = useMemo(
    () => tablePopupPrice,
    []
  );
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div
      id="popupServices"
      className={
        active
          ? "popup__services active"
          : "popup"
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? "popup__services_content active"
            : "popup__services_content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map(
                  (column) => (
                    <th
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  )
                )}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="td__rows"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
