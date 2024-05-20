"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";
import { loadItems, addItem } from "@/store/itemsSlice.js";

export default function Home() {
  const [currentItem, setCurrentItem] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    dispatch(loadItems(storedItems));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <ItemForm currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <ItemList setCurrentItem={setCurrentItem} />
    </div>
  );
}
