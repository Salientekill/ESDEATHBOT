const fs = require('fs');

// Caminho para o arquivo package.json
const packageJsonPath = './package.json';

// Lendo o conteúdo do arquivo package.json
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo package.json:', err);
        return;
    }

    try {
        // Convertendo o conteúdo para objeto JSON
        const packageJson = JSON.parse(data);

        // Lendo os módulos na pasta node_modules
        fs.readdir('node_modules', (err, modules) => {
            if (err) {
                console.error('Erro ao listar os módulos:', err);
                return;
            }

            // Adicionando os módulos como dependências no package.json
            modules.forEach(module => {
                packageJson.dependencies[module] = '*';
            });

            // Escrevendo de volta no arquivo package.json
            fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), err => {
                if (err) {
                    console.error('Erro ao escrever no arquivo package.json:', err);
                    return;
                }

                console.log('Módulos adicionados como dependências no arquivo package.json com sucesso.');
            });
        });
    } catch (err) {
        console.error('Erro ao processar o arquivo package.json:', err);
    }
});
