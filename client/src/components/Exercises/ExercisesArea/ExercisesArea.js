import ExercisesCard from "../ExercisesCard/ExercisesCard"
import styles from "./ExercisesArea.module.css"

const ExercisesArea = () => {
    return (
        <div className={styles.exercises_area_container}>
            <ExercisesCard />
        </div>
    )    
}

export default ExercisesArea