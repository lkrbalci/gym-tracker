import { Droppable } from "react-beautiful-dnd";

const DayCard = (props) => {
  return (
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
  );
};

export default DayCard;
