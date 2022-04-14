import styles from "./ExercisesCard.module.css";
import { Draggable } from "react-beautiful-dnd";

const ExercisesCard = (props) => {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          className={styles.exercises_card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{props.id}</p>
        </div>
      )}
    </Draggable>
  );
};

export default ExercisesCard;
