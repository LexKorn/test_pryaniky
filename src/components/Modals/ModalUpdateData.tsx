import React, {useState, useEffect} from 'react';

import { updateData } from '../../http/dataAPI';
import { IData } from '../../types/types';
import CUData from '../CreateUpdate/CUData';

interface ModalUpdateDataProps {
    open: boolean;
    handleClose: () => void;
    note: IData;
};


const ModalUpdateData: React.FC<ModalUpdateDataProps> = ({open, handleClose, note}) => {
    const [companySigDate, setCompanySigDate] = useState<string>('');
    const [companySignatureName, setCompanySignatureName] = useState<string>('');
    const [documentName, setDocumentName] = useState<string>('');
    const [documentStatus, setDocumentStatus] = useState<string>('');
    const [documentType, setDocumentType] = useState<string>('');
    const [employeeNumber, setEmployeeNumber] = useState<string>('');
    const [employeeSigDate, setEmployeeSigDate] = useState<string>('');
    const [employeeSignatureName, setEmployeeSignatureName] = useState<string>('');

    useEffect(() => {
        setCompanySigDate(note.companySigDate);
        setCompanySignatureName(note.companySignatureName);
        setDocumentName(note.documentName);
        setDocumentStatus(note.documentStatus);
        setDocumentType(note.documentType);
        setEmployeeNumber(note.employeeNumber);
        setEmployeeSigDate(note.employeeSigDate);
        setEmployeeSignatureName(note.employeeSignatureName);
    }, [open]);
    
    return (
        <CUData 
            id={note.id}
            companySigDate={companySigDate}
            companySignatureName={companySignatureName}
            documentName={documentName}
            documentStatus={documentStatus}
            documentType={documentType}
            employeeNumber={employeeNumber}
            employeeSigDate={employeeSigDate}
            employeeSignatureName={employeeSignatureName}
            setCompanySigDate={setCompanySigDate}
            setCompanySignatureName={setCompanySignatureName}
            setDocumentName={setDocumentName}
            setDocumentStatus={setDocumentStatus}
            setDocumentType={setDocumentType}
            setEmployeeNumber={setEmployeeNumber}
            setEmployeeSigDate={setEmployeeSigDate}
            setEmployeeSignatureName={setEmployeeSignatureName}
            // @ts-ignore
            handler={updateData}
            title='Обновить запись'
            btnName='Обновить'
            open={open}
            handleClose={handleClose}
        />
    );
};

export default ModalUpdateData;