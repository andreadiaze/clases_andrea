import { getTableColumns } from 'drizzle-orm';
import { AnyPgTable } from 'drizzle-orm/pg-core';

export const getSortableColumns = <
  T extends AnyPgTable,
  Col extends keyof T['$inferSelect'],
  ExCol extends Col = never, // 'never' enables proper typing of excluded keys
>(
  table: T,
  excluded?: readonly ExCol[],
) => {
  const columns = getTableColumns(table);
  const result = Object.keys(columns).flatMap((col) =>
    excluded?.includes(col as ExCol) ? [] : [col, `-${col}`],
  );

  return result as [
    Exclude<Col, ExCol> | `-${string & Exclude<Col, ExCol>}`,
    ...(Exclude<Col, ExCol> | `-${string & Exclude<Col, ExCol>}`)[],
  ];
};
