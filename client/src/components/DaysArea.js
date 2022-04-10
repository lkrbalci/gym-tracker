import DayCard from "./DayCard"

const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

const DaysArea = () => {
    return (
        days.map((day, index) => <DayCard day={day} index={index}/>)
    )
}

export default DaysArea