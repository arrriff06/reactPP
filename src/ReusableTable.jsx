import PropTypes from "prop-types";

export default function ReusableTable({ 
  columns,
  data,
  caption,
  emptyText = "No records Found",
}) {
  return (
    <div style={{ overflow: "auto" }}>
      <table border="1">
        {caption && <caption>{caption}</caption>}

        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>{emptyText}</td>
            </tr>
          ) : (
            data.map((row, rIdx) => (
              <tr key={rIdx}>
                {columns.map((col) => (
                  <td key={col.accessor}>
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

ReusableTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  caption: PropTypes.string,
  emptyText: PropTypes.string,
};
 