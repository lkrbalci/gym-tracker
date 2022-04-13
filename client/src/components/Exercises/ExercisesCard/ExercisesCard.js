import styles from "./ExercisesCard.module.css";
import { Draggable } from "react-beautiful-dnd";

const ExercisesCard = (props) => {
  return (
    <Draggable key="3" draggableId="3" index={props.index}>
      {(provided) => (
        <div
          className={styles.exercises_card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>something</p>
        </div>
      )}
    </Draggable>
  );
};

export default ExercisesCard;
