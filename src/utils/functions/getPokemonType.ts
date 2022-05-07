export function getPokemonType(typeName: string) {
  let typeId: number | null = 0;

  switch (typeName) {
    case "all":
      typeId = 0;
      break;
    case "normal":
      typeId = 1;
      break;
    case "fighting":
      typeId = 2;
      break;
    case "flying":
      typeId = 3;
      break;
    case "poison":
      typeId = 4;
      break;
    case "ground":
      typeId = 5;
      break;
    case "rock":
      typeId = 6;
      break;
    case "bug":
      typeId = 7;
      break;
    case "ghost":
      typeId = 8;
      break;
    case "steel":
      typeId = 9;
      break;
    case "fire":
      typeId = 10;
      break;
    case "water":
      typeId = 11;
      break;
    case "grass":
      typeId = 12;
      break;
    case "electric":
      typeId = 13;
      break;
    case "psychic":
      typeId = 14;
      break;
    case "ice":
      typeId = 15;
      break;
    case "dragon":
      typeId = 16;
      break;
    case "dark":
      typeId = 17;
      break;
    case "fairy":
      typeId = 18;
      break;
    case "":
      typeId = null;
      break;
    default:
      typeId = null;
  }

  return typeId;
}
