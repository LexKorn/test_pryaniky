import React, {useContext} from 'react';
import {Modal, Button, Box, Typography, TextField} from '@mui/material';

import { Context } from '../..';

interface CUDataProps {
    id: string;
    companySigDate: string;
    companySignatureName: string;
    documentName: string;
    documentStatus: string;
    documentType: string;
    employeeNumber: string;
    employeeSigDate: string;
    employeeSignatureName: string;
    setCompanySigDate: (companySigDate: string) => void;
    setCompanySignatureName: (companySignatureName: string) => void;
    setDocumentName: (documentName: string) => void;
    setDocumentStatus: (documentStatus: string) => void;
    setDocumentType: (documentType: string) => void;
    setEmployeeNumber: (employeeNumber: string) => void;
    setEmployeeSigDate: (employeeSigDate: string) => void;
    setEmployeeSignatureName: (employeeSignatureName: string) => void;
    handler: (companySigDate: string, companySignatureName: string, documentName: string, documentStatus: string, documentType: string, employeeNumber: string, employeeSigDate: string, employeeSignatureName: string) => Promise<unknown>;
    title: string;
    btnName: string;
    open: boolean;
    handleClose: () => void;
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const CUData: React.FC<CUDataProps> = ({id, companySigDate, companySignatureName, documentName, documentStatus, documentType, employeeNumber, employeeSigDate, employeeSignatureName, setCompanySigDate, setCompanySignatureName, setDocumentName, setDocumentStatus, setDocumentType, setEmployeeNumber, setEmployeeSigDate, setEmployeeSignatureName, handler, title, btnName, open, handleClose}) => {

    const {notes} = useContext(Context);

    const onClick = () => {
        if (!companySigDate.trim() || !companySignatureName.trim() || !documentName.trim() || !documentStatus.trim() || !documentType.trim() || !employeeNumber.trim() || !employeeSigDate.trim() || !employeeSignatureName.trim()) {
            return alert('Все поля обязательны для заполнения');
        }

        if (btnName === 'Добавить') {
            handler(companySigDate, companySignatureName, documentName, documentStatus, documentType, employeeNumber, employeeSigDate, employeeSignatureName)
                .then(() => handleClose())
                .catch(err => console.log(err.response.data.message));
        } else {
            // @ts-ignore 
            handler(id, companySigDate, companySignatureName, documentName, documentStatus, documentType, employeeNumber, employeeSigDate, employeeSignatureName)
                .then(() => {
                    handleClose();
                    notes.setToggle(notes.toggle);
                })
                .catch(err => alert(err.response.data.message));
        }
    };


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="my-card__form">
                        <TextField 
                            className="my-card__input"
                            placeholder="Company Sig Date..."
                            value={companySigDate}
                            onChange={e => setCompanySigDate(e.target.value)}
                        />
                        <TextField
                            className="my-card__input"
                            placeholder="Company Signature Name..."
                            value={companySignatureName}
                            onChange={e => setCompanySignatureName(e.target.value)}
                        />
                        <TextField 
                            className="my-card__input"
                            placeholder="Document Name..."
                            value={documentName}
                            onChange={e => setDocumentName(e.target.value)}
                        />
                        <TextField
                            className="my-card__input"
                            placeholder="Document Status..."
                            value={documentStatus}
                            onChange={e => setDocumentStatus(e.target.value)}
                        />
                        <TextField 
                            className="my-card__input"
                            placeholder="Document Type..."
                            value={documentType}
                            onChange={e => setDocumentType(e.target.value)}
                        />
                        <TextField
                            className="my-card__input"
                            placeholder="Employee Number..."
                            value={employeeNumber}
                            onChange={e => setEmployeeNumber(e.target.value)}
                        />
                        <TextField 
                            className="my-card__input"
                            placeholder="Employee SigDate..."
                            value={employeeSigDate}
                            onChange={e => setEmployeeSigDate(e.target.value)}
                        />
                        <TextField
                            className="my-card__input"
                            placeholder="Employee Signature Name..."
                            value={employeeSignatureName}
                            onChange={e => setEmployeeSignatureName(e.target.value)}
                        />

                        <Button 
                            onClick={onClick}
                            variant="contained"
                            className="my-card__btn"
                            >
                            {btnName}
                        </Button>
                    </div>
                </Typography>
            </Box>
        </Modal>
    );
};

export default CUData;