import React, { useEffect, useState } from "react";

function Grocery() {
  const [item, setItem] = useState("");
  const [checkedItems, setCheckedItems] = useState(
    [localStorage.getItem("checkedItems") || []].join(",").split(",")
  );
  useEffect(() => {
    setCheckedItems([]);
  }, []);
  console.log(checkedItems);
  const [items, setItems] = useState(checkedItems);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem("");
    console.log(items);
  };

  useEffect(() => {
    localStorage.setItem("checkedItems", checkedItems);
    if (checkedItems[0] == "") console.log(checkedItems[0] == "");
    // console.log(checkedItems);
  }, [checkedItems]);
  const handleOnChangeItem = (e) => {
    setItem(e.target.value);
  };
  const deleteItem = (item) => {
    setItems(items.filter((i) => i !== item));
    console.log(item);
    console.log(checkedItems);
    if (checkedItems.includes(item)) {
      console.log("hii");
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };
  const editItem = (item) => {
    if (!checkedItems.includes(item)) setCheckedItems([...checkedItems, item]);
  };
  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <form>
        <input value={item} type="text" onChange={handleOnChangeItem} />
        <button onClick={addItem}>Add Item</button>
      </form>
      <div className="data">
        <ul className="options">
          {items.map((item, index) =>
            item !== "" ? (
              <il className="option" key={index}>
                <input type="checkbox" onChange={() => editItem(item)} />
                <p>{item}</p>
                <button onClick={() => deleteItem(item)}>Delete</button>
              </il>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default Grocery;
