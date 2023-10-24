import Items from "./Items";

const List = () => {
  let arr = ["Item 1", "Item2", "Item3"];

  const items = arr.map((item) => {
    return <Items title={item} />;
  });

  return (
    <>
      <div>{items}</div>
    </>
  );
};

export default List;
