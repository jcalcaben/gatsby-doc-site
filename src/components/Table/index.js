import React from "react"

import "@spectrum-css/table"

import styles from "./table.module.css"

const Table = ({ children }) => {
  const classes = ["spectrum-Table", "spectrum-Table--quiet", styles.root].join(' ');
  return <table className={classes}>{children}</table>
}

const TableBody = ({ children }) => {
  return <tbody className="spectrum-Table-body">{children}</tbody>
}

const TableRow = ({ children }) => {
  const classes = ["spectrum-Table-row", styles.tableRow].join(' ');
  return <tr className={classes}>{children}</tr>
}

const TableHead = ({ children }) => {
  return <thead className="spectrum-Table-head">{children}</thead>
}

const TableHeaderCell = ({ children }) => {
  return <th className="spectrum-Table-headCell">{children}</th>
}

const TableCell = ({ children }) => {
  return <td className="spectrum-Table-cell">{children}</td>
}

export { Table, TableBody, TableRow, TableHead, TableCell, TableHeaderCell }
