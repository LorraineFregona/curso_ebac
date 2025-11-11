const pessoas = [
    { nome: 'Ana', sexo: 'F', idade: 25, nacionalidade: 'Brasileira' },
    { nome: 'João', sexo: 'M', idade: 30, nacionalidade: 'Português' },
    { nome: 'Maria', sexo: 'F', idade: 22, nacionalidade: 'Brasileira' },
    { nome: 'Pedro', sexo: 'M', idade: 28, nacionalidade: 'Espanhol' },
    { nome: 'Carla', sexo: 'F', idade: 35, nacionalidade: 'Italiana' },
    { nome: 'Lucas', sexo: 'M', idade: 19, nacionalidade: 'Brasileira' }
];


console.log('Lista original:');
pessoas.forEach(pessoa => {
    console.log(`${pessoa.nome} - ${pessoa.sexo}, ${pessoa.idade} anos, ${pessoa.nacionalidade}`);
});

//(arrow function)
const mulheres = pessoas.filter(pessoa => pessoa.sexo === 'F');


console.log('\nLista de mulheres:');
mulheres.forEach(mulher => {
    console.log(`${mulher.nome} - ${mulher.idade} anos, ${mulher.nacionalidade}`);
});
