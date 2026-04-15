const studenten = [
{ naam: 'Jan', cijfer: 7 },
{ naam: 'Piet', cijfer: 8 },
{ naam: 'Klaas', cijfer: 6 },
{ naam: 'Marie', cijfer: 9 }
];
studenten.filter(student => student.cijfer >= 8).forEach(student => console.log(student.naam));