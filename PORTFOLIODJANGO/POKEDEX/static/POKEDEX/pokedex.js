var imagenes =[];
imagenes["Pikachu"]="/static/POKEDEX/vaca.png";
imagenes["Charizard"]="/static/POKEDEX/pollo.png";
imagenes["Jigglypuff"]="/static/POKEDEX/cerdo.png";

var coleccion = [];
coleccion.push(new Pokemon("Pikachu", "Electrico", 4, "macho","Thunderbolt"));
coleccion.push(new Pokemon("Charizard", "Fuego", 70, "macho","Ascuas"));
coleccion.push(new Pokemon("Jigglypuff", "Normal", 1, "macho","Canto"));

for(i of coleccion)
{
    i.mostrar() //of muestra el objeto ejm: i=valor del diccionario; in muestra el indice del diccionario, osea seria: coleccion[i]=valor del diccionario, i seria el indice
}