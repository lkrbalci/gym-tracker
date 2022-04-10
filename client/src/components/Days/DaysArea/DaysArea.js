import DayCard from "../DayCard/DayCard";
import styles from "./DaysArea.module.css"

const days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const DaysArea = () => {
  return (
    <div className={styles.days_area_container}>
      {days.map((day, index) => <DayCard day={day} index={index} />)}
    </div>
  );
};

export default DaysArea;
