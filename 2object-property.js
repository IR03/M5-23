const students = [
    {id:21, name: 'Omar Sunny'},
    {id:29, name: 'Kalamanik'},
    {id:71, name: 'Deepjol'},
    {id:78, name: 'Ishita'}
];
 const names = students.map(s=>s.name);
 console.log(names);

 const sort = students.filter(s=>s.id>30);
 console.log(sort);