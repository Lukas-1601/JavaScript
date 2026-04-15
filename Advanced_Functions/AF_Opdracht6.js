const studenten = [
{ naam: 'Jan', cijfer: 7 },
{ naam: 'Piet', cijfer: 8 },
{ naam: 'Klaas', cijfer: 6 },
{ naam: 'Marie', cijfer: 9 }
];
studenten.forEach(student => {
    if (student.cijfer >= 8) {
        console.log(student.naam);
    }
});