const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": [ ] }
]);
//Una serie de objetos Pokémon donde la identificación es divisible por 3
const divisibleTres= pokemon.filter(divisor =>divisor.id%3==0)
console.log(divisibleTres);
//una serie de objetos Pokémon que son del tipo "fuego"
const TipoFuego=pokemon.filter(tipo=>tipo.types.includes("fire"));
console.log(TipoFuego);
//Una variedad de objetos Pokémon que tienen más de un tipo
const unTipo = pokemon.filter(tipo => tipo.types.length == 1);
console.log(unTipo);
//una matriz con solo los nombres de los Pokémon
const nombrePokemon = pokemon.map(nombre => nombre.name);
console.log(nombrePokemon);
//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const PokemonMayor = pokemon.filter(identificador => identificador.id>99 );
const nombrePokemonMayor=PokemonMayor.map(nombre=>nombre.name);
console.log(nombrePokemonMayor);
//una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const TipoVeneno=pokemon.filter(tipo=>tipo.types.includes("poison") && tipo.types.length==1);
const nombrePokemonVeneno=TipoVeneno.map(nombre=>nombre.name);
console.log(nombrePokemonVeneno);
//una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const TipoVolador=pokemon.filter(tipo=>tipo.types.includes("flying"));
const primerTipoVolador =TipoVolador.map(tipo=>tipo.types[0]); 
console.log(primerTipoVolador);
//un recuento de la cantidad de pokémon que son de tipo "normal"
const TipoNormal=pokemon.filter(tipo=>tipo.types.includes("normal"))
let cantidad = TipoNormal.length
console.log(cantidad);

