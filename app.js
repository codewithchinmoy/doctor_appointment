document.addEventListener('DOMContentLoaded', () => {

    const registerPatientForm = document.querySelector('#register-patient-form');
    registerPatientForm.addEventListener('submit', registerPatient);

    const clearRegisterButton = document.querySelector('#clear-register-button');
    clearRegisterButton.addEventListener('click', clearRegister);
    
    addOptions(document.querySelector('#type-select'), Object.keys(typeOptions));
    addOptions(document.querySelector('#doctor-select'), doctorOptions);

});

const typeOptions = {
    'UnDiagonosed':"UN",
    'Physical': 'P',
    'Mental': 'M',
    'Infectious': 'I',
    'Non- Infectious': 'NI',
    'Deficiency': 'D',
    'Inherited': 'H',
    'Degenerative': 'G',
    'Self-inflicted': 'Si'
}

const doctorOptions = ['Sanjeev', 'Lunia', 'Ghosh'];

const addOptions = function (select, options) {
    for (optionText of options) {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    }
}

const registerPatient = function (event) {
    event.preventDefault();
    const register = document.querySelector('#register');
    const listItem = document.createElement('li');
    const table = document.createElement('table');
    const header = makeCardHeader(event.target);
    addRowToTable(table, 'Date of Birth:', event.target.dob.value);
    addRowToTable(table, 'Type:', event.target.type.value);
    addRowToTable(table, 'Contact Tel:', event.target.contact.value);
    addRowToTable(table, 'Notes:', event.target.notes.value);
    addRowToTable(table, 'Doctor:', event.target.doctor.value);
    listItem.appendChild(header);
    listItem.appendChild(table);
    register.appendChild(listItem);
    this.reset();
}

const addRowToTable = function (table, header, data) {
    const tableRow = document.createElement('tr');
    const tableHeader = document.createElement('th');
    tableHeader.textContent = header;
    const tableData = document.createElement('td');
    tableData.textContent = data;
    tableRow.appendChild(tableHeader);
    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
}

const clearRegister = function () {
    const register = document.querySelector('#register');
    register.innerHTML = '';
}

const makeCardHeader = function (target) {
    const header = document.createElement('div');
    const badge = document.createElement('h3');
    const name = document.createElement('h3');
    const deleteButton = document.createElement('button');
    badge.textContent = typeOptions[target.type.value];
    name.textContent = target.name.value;
    deleteButton.textContent = 'Delete';
    badge.classList.add('badge');
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteCard);
    header.appendChild(badge);
    header.appendChild(name);
    header.appendChild(deleteButton);
    return header;
}

const deleteCard = function () {
    this.parentElement.parentElement.remove();
}