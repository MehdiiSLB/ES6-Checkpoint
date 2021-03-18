const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];
const getAge = (pet) => new Date().getFullYear() - pet.bornOn;

let petsWithAge = pets.map((elem) => {
  const obj = { ...elem };
  obj.age = getAge(elem);
  return obj;
});
console.log(petsWithAge);

const petsdogs = pets.filter((elem) => elem.type == "dogs");

const jasper = petsWithAge.find((elem) => {
  if (elem.name === "Jasper") return true; // filter: cherche partout / find : cherche 1 seul
});

console.log("Jasper is " + jasper.age + " years old");
