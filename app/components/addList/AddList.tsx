"use client";

import { useState } from "react";

import {
  addToList, rmToList, selectAddList, selectStatus
} from "@/lib/features/addList/addListSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./AddList.module.css";

export const AddList = () => {
  const dispatch = useAppDispatch();
  const addlist = useAppSelector(selectAddList);
  const status = useAppSelector(selectStatus);
  const [textToSend, setTextToSend] = useState("");

  // const incrementValue = Number(incrementAmount) || 0;

  const addText = (text: string) => {
    dispatch(addToList({ text, id: Math.floor(Math.random() * 100) }))
  }

  const rmText = (id: number) => {
    dispatch(rmToList(id))
  }

  return (
    <div>
      <div className={styles.row}>
        <input placeholder="New text to add.." className={styles.button} value={textToSend}
          type="text" onChange={(e) => setTextToSend(e.target.value)} />
        <button onClick={() => addText(textToSend)} >
          Add to List
        </button>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {addlist.map((list, id) => (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} key={list.id}>
              <p aria-label="Count" className={styles.value}>
                {list.text}
              </p>
              <button style={{ height: '30px', borderRadius: '10px' }} onClick={() => rmText(list.id)} >
                X
              </button>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
};
