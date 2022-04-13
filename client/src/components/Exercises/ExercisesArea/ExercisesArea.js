import { Droppable } from "react-beautiful-dnd";

import ExercisesCard from "../ExercisesCard/ExercisesCard";
import styles from "./ExercisesArea.module.css";


const ExercisesArea = () => {
  return (
    <div className={styles.day_card_container}>
      <Droppable key="1" droppableId="1">
        {(provided) => (
          <div
            className={styles.exercises_area_container}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <ExercisesCard index="3" />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ExercisesArea;
