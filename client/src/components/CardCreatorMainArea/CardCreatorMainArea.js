import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import DaysArea from "../Days/DaysArea/DaysArea";
import ExercisesArea from "../Exercises/ExercisesArea/ExercisesArea"
import styles from "./CardCreatorMainArea.module.css"

const dragEndHandler = (result) => {
  console.log(result);
};

const CardCreatorMainArea = () => {
  return (
    <div className={styles.card_creator_wrapper}>
      <DragDropContext onDragEnd={dragEndHandler}>
        <DaysArea />
        <ExercisesArea />
      </DragDropContext>
    </div>
  );
};

export default CardCreatorMainArea;
