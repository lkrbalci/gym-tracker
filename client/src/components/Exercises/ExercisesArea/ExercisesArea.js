import { Droppable } from "react-beautiful-dnd";

import ExercisesCard from "../ExercisesCard/ExercisesCard";
import styles from "./ExercisesArea.module.css";

const exercises = ["dumbell", "bar", "body weight"]

const ExercisesArea = () => {
  return (
    <div className={styles.day_card_container}>
      <Droppable key="1" droppableId="exercises">
        {(provided) => (
          <div
            className={styles.exercises_area_container}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {exercises.map((exercise, index) => <ExercisesCard key={index} id={exercise} index={index} />)}
            
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ExercisesArea;
