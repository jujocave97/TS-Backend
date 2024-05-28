const { exec } = require('child_process');
const fs = require('fs');

const folderPath = './insertIndividuality'; // Ruta de la carpeta que deseas leer

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error al leer la carpeta:', err);
        return;
    }

    console.log('Archivos en la carpeta:');
    files.forEach(file => {
        console.log(file);
        exec(`node insertIndividuality/${file}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al ejecutar el comando: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Comando stderr: ${stderr}`);
                return;
            }
            console.log(`Resultado del comando:\n${stdout}`);
        });
    });
});
