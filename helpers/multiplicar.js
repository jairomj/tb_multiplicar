var colors = require('colors');
const fs = require('fs');

const archivo = async(base, listar = false, hasta)=>{
    try {
    let salida, consola = '';

    for (let i = 0; i <= hasta; i++) {
        salida += `${base} X ${i} = ${base*i}\n` ;
        consola += `${base} ${'X'.underline.cyan} ${i} ${'='.underline.cyan} ${base*i}\n` ;
    }
    if(listar){
        console.log('============================='.green);
            console.log(`Tabla del ${base}`.cyan);
            console.log('============================='.blue);
        console.log(consola);
    }
        


        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla de ${base} creada con exito `;
        
    } catch (err) {
        throw err;
    }
    
}

module.exports={
   crearArchivo: archivo
}