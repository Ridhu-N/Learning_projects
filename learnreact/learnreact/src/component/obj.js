function Object() {
  const user = {
    name: "Ridhu",
    age: 22,
    place: "coimbatore",
  };
  return (
    <div>
      <p>User Object</p>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h2>Place: {user.place}</h2>
    </div>
  );
}
export default Object;
