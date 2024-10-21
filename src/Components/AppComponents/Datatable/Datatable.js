import React from 'react';
import styled from 'styled-components';

function DataTable({ columns = [], data = [], onRowClick, className }) {
  if (!columns.length || !data.length) {
    return <div>Geen gegevens gevonden</div>;
  }

  return (
    <StyledTableWrapper className={className}>
      <StyledTable>
        <thead>
          <StyledHeaderRow>
            {columns.map((col) => (
              <StyledHeaderCell key={col.accessor}>
                {col.Header}
              </StyledHeaderCell>
            ))}
          </StyledHeaderRow>
        </thead>
        <tbody>
          {data.map((row) => (
            <StyledRow
              key={row.id}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((col) => (
                <StyledCell key={col.accessor}>{row[col.accessor]}</StyledCell>
              ))}
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}

const StyledTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9fafb;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const StyledHeaderRow = styled.tr`
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`;

const StyledHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9fafb;
  }

  &:nth-child(odd) {
    background-color: #ffffff;
  }

  &:hover {
    background-color: #f3f4f6;
    cursor: pointer;
  }

  &:hover td {
    color: #1f2937;
  }
`;

const StyledCell = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default DataTable;
