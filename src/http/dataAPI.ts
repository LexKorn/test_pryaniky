const baseHeaders = {
    'Content-Type': 'application/json',
    'x-auth': `${localStorage.getItem('token')}`
};

const url: string = `${process.env.REACT_APP_API_URL}ru/data/v3/testmethods/docs/userdocs/`;

export const getData = async () => {
    const response = await fetch(`${url}get`, {
        method: 'GET', 
        headers: baseHeaders
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
};

export const deleteData = async (id: string) => {
    const response = await fetch(`${url}delete/${id}`, {
        method: 'POST', 
        headers: baseHeaders
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
};

export const createData = async (
    companySigDate: string, 
    companySignatureName: string, 
    documentName: string, 
    documentStatus: string, 
    documentType: string, 
    employeeNumber: string, 
    employeeSigDate: string, 
    employeeSignatureName: string
    ) => {
        const response = await fetch(`${url}create`, {
            method: 'POST', 
            headers: baseHeaders,
            body: JSON.stringify({
                companySigDate, 
                companySignatureName, 
                documentName, 
                documentStatus, 
                documentType, 
                employeeNumber, 
                employeeSigDate, 
                employeeSignatureName
            })
        });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
};

export const updateData = async (
    id: string,
    companySigDate: string, 
    companySignatureName: string, 
    documentName: string, 
    documentStatus: string, 
    documentType: string, 
    employeeNumber: string, 
    employeeSigDate: string, 
    employeeSignatureName: string
    ) => {
    const response = await fetch(`${url}set/${id}`, {
        method: 'POST', 
        headers: baseHeaders,
        body: JSON.stringify({
            id,
            companySigDate, 
            companySignatureName, 
            documentName, 
            documentStatus, 
            documentType, 
            employeeNumber, 
            employeeSigDate, 
            employeeSignatureName
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
};