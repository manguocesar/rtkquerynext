"use client";

import { useState } from "react";

import {
  addToList, selectAddList, selectStatus
} from "@/lib/features/addList/addListSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./AddList.module.css";

export const AddList = () => {
  const dispatch = useAppDispatch();
  const addlist = useAppSelector(selectAddList);
  const status = useAppSelector(selectStatus);
  const [textToSend, setTextToSend] = useState("");

  // const incrementValue = Number(incrementAmount) || 0;

  console.log("addlist", addlist);


  return (
    <div>
      <div className={styles.row}>
        <input placeholder="New text to add.." className={styles.button} value={textToSend}
          type="text" onChange={(e) => setTextToSend(e.target.value)} />
        <button onClick={() => dispatch(addToList(textToSend))} >
          Add to List
          </button>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {addlist.map((list, id) => (
            <p key={id} aria-label="Count" className={styles.value}>
              {list}
            </p>
          )

          )}
        </div>
        {/* <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        > 
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </button>*/}
      </div>
    </div>
  );
};
