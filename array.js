const hobbies = ['Tocar', 'Jogar futebol', 'Escutar música'];

console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[0] = 'Ler livros';
console.log(hobbies);

hobbies.length;
console.log (hobbies.length);

hobbies.push('Cagar'); 
console.log(hobbies);

hobbies.pop(); 
console.log(hobbies);

let posicao = hobbies.indexOf('Jogar futebol'); 
hobbies.splice(posicao, 1); 
console.log(hobbies);
hobbies.splice(1, 1); 
console.log(hobbies);

const hobbiesDoAmigo = ['cantar', 'dançar', 'tocar guitarra'];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo); 
console.log(todosOsHobbies);

const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar podcast'];
const hobbiesEsportivos = ['correr', 'jogar tenis', 'nadar'];
const hobbiesCriativos = ['desenhar', 'escrever histórias', 'fazer esculturas'];
const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];
console.log(categoriasDeHobbies);

console.log(categoriasDeHobbies[0][0]); 
console.log(categoriasDeHobbies[0][2]);