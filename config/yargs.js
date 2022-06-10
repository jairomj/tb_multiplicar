const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'Es la base de la tabla a multiplicar'
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            description: 'muestra la tabla en consola'.green
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            description: 'hasta donde quiero la multiplicacion'.green
        })
        .check((argv, option)=>{
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser numero';
            }
            return true;
        })
.argv;

module.exports = argv;