const empleados = [{
    id: 1,
    nombre: 'Jairo'
},
{
    id: 2,
    nombre: 'Linda'
},
{
    id: 3,
    nombre: 'Karen'
}
];

const salarios = [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 1500
}
];

const getEmpleado = (id) => {

 const promesa = new Promise((resolve, reject)=>{
    const empleado = empleados.find(e => e.id === id)?.nombre;
 /*if(empleado){
    resolve(empleado)
        }else{
        reject(`El empleado con id ${id} no existe`);
        }*/
        //if simplificado
        (empleado)
        ? resolve(empleado)
        : reject(`El empleado con id ${id} no existe`);
    });

    return promesa;

    
}

const getSalario = (id)=>{
    const promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find(s => s.id === id)?.salario;
    (salario)
        ? resolve(salario)
        : reject(`El empleado con id ${id} no tiene salario`);
    });
    return promesa;
    
}

const getInfoUser= async(id)=>{
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es ${salario}`;

    }catch(error){
        throw error;
    }
}


const id =5;
getInfoUser(id)
.then(msg => {
    console.log('TODO BIEN');
    console.log(msg)
})
.catch(err => {
    console.log('TODO MAL');
    console.log(err)
});