import { Droppable } from "react-beautiful-dnd";

import styles from "./DayCard.module.css"

const DayCard = (props) => {
  return (
    <div key={props.index} className={styles.day_card_container}>
      <Droppable key={props.id} droppableId={props.id}>
        {(provided) => (
          <div
            className={styles.day_card}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.id}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DayCard;
