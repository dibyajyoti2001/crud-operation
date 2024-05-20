"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "@/store/itemsSlice.js";
import { v4 as uuidv4 } from "uuid";

const ItemForm = ({ currentItem, setCurrentItem }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentItem) {
      setTitle(currentItem.title);
    } else {
      setTitle("");
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      dispatch(updateItem({ ...currentItem, title }));
      setCurrentItem(null);
    } else {
      dispatch(addItem({ id: uuidv4(), title }));
    }
    setTitle("");
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter item title"
          required
        />
        <button type="submit">{currentItem ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ItemForm;
