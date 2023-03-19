import React, {useContext, useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { IData } from '../types/types';
import { deleteData } from '../http/dataAPI';
import {Context} from '../index';
import ModalUpdateData from './Modals/ModalUpdateData';

interface BasicTableProps {
  rows: IData[];
};

const BasicTable: React.FC<BasicTableProps> = ({rows}) => {
  const {notes} = useContext(Context);
  const [note, setNote] = useState<IData>({} as IData);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (note.id) {
      setVisible(true);
    }
  }, [note]);

  const removeData = (item: IData) => {
    deleteData(item.id).then(() => notes.setToggle(notes.toggle));
  };

  // const editData = (item: IData) => {
  //   setNote(item);
    // setVisible(true);
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Sig Date</TableCell>
            <TableCell align="right">Company Signature Name</TableCell>
            <TableCell align="right">Document Name</TableCell>
            <TableCell align="right">Document Status</TableCell>
            <TableCell align="right">Document Type</TableCell>
            <TableCell align="right">Employee Number</TableCell>
            <TableCell align="right">Employee SigDate</TableCell>
            <TableCell align="right">Employee Signature Name</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.companySigDate}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.companySigDate}
                {/* {row.companySigDate.toISOString()} */}
              </TableCell>
              <TableCell align="right">{row.companySignatureName}</TableCell>
              <TableCell align="right">{row.documentName}</TableCell>
              <TableCell align="right">{row.documentStatus}</TableCell>
              <TableCell align="right">{row.documentType}</TableCell>
              <TableCell align="right">{row.employeeNumber}</TableCell>
              <TableCell align="right">{row.employeeSigDate}</TableCell>
              {/* <TableCell align="right">{(new Date(row.employeeSigDate)).toISOString()}</TableCell> */}
              <TableCell align="right">{row.employeeSignatureName}</TableCell>
              <TableCell align="right">
                <EditIcon 
                  style={{color: 'blue', cursor: 'pointer'}} 
                  onClick={() => setNote(row)}
                />
                <DeleteForeverIcon 
                  style={{color: 'red', cursor: 'pointer'}}
                  onClick={() => removeData(row)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ModalUpdateData open={visible} handleClose={() => setVisible(false)} note={note} />
    </TableContainer>
  );
}

export default BasicTable;