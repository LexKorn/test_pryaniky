import React, {useState} from 'react';

import { createData } from '../../http/dataAPI';
import CUData from '../CreateUpdate/CUData';

interface ModalAddDataProps {
    open: boolean;
    handleClose: () => void;
};


const ModalAddData: React.FC<ModalAddDataProps> = ({open, handleClose}) => {
    const [companySigDate, setCompanySigDate] = useState<string>('');
    const [companySignatureName, setCompanySignatureName] = useState<string>('');
    const [documentName, setDocumentName] = useState<string>('');
    const [documentStatus, setDocumentStatus] = useState<string>('');
    const [documentType, setDocumentType] = useState<string>('');
    const [employeeNumber, setEmployeeNumber] = useState<string>('');
    const [employeeSigDate, setEmployeeSigDate] = useState<string>('');
    const [employeeSignatureName, setEmployeeSignatureName] = useState<string>('');
    
    return (
        <CUData 
            id=''
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
            handler={createData}
            title='Добавить запись'
            btnName='Добавить'
            open={open}
            handleClose={handleClose}
        />
    );
};

export default ModalAddData;