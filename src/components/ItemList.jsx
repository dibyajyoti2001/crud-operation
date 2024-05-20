"use client";

import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "@/store/itemsSlice.js";

const ItemList = ({ setCurrentItem }) => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span className="item-text">{item.title}</span>
            <div className="item-buttons">
              <button onClick={() => setCurrentItem(item)}>Edit</button>
              <button onClick={() => dispatch(deleteItem(item.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
