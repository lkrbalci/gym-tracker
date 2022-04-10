import { Droppable } from "react-beautiful-dnd";

import styles from "./DayCard.module.css"

const DayCard = (props) => {
  return (
    <div className={styles.day_card_container}>
      <Droppable key={props.index} droppableId={props.day}>
        {(provided) => (
          <div
            className="dayDroppable"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.day}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DayCard;
