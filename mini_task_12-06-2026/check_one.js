const users = [
  { id: 1, name: "Ketan" },
  { id: 2, name: "Akshay" }
];

const index = users.findIndex(user => user.id === 10);

console.log(index);

if (index===-1) {
  console.log("Not Found");
}