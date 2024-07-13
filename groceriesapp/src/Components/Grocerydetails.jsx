import axios from "axios";
import { useState } from "react";
import GroceryItem from "./GroceryItem";

const Grocerydetails = () => {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(true);

  const getDatafromApi = async () => {
    if (btn) {
      try {
        let res = await axios.get(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries"
        );
        console.log(res.data.data);
        setData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      setData([]);
    }
    setBtn(!btn);
  };

  return (
    <div>
      <h1>Groceries</h1>
      {btn && (
        <button className="get-groceries" onClick={getDatafromApi}>
          Get Groceries
        </button>
      )}
      <div className="grocery-container" styles={{ display: "flex" }}>
        {data.map((item) => (
          <GroceryItem
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Grocerydetails;
