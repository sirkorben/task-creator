import Task from './Task'

const Tasks = (props) => {
  return (
    <>{props.tasks.map((task) => (<Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>))}</>
  )
}

export default Tasks


// {
//     "id": 1,
//     "text": "Doing exercises with kettlebell",
//     "day": "Feb 21th at 18:00pm",
//     "reminder": true
//   },

//   {
//     "id": 2,
//     "text": "Meet Anna from work",
//     "day": "Feb 21th at 19:30pm",
//     "reminder": true
//   },
//   {
//     "id": 3,
//     "text": "Finishing the Project",
//     "day": "Feb 21th at 10:30pm",
//     "reminder": true
//   },
//   {
//     "id": 4,
//     "text": "Going to bed",
//     "day": "Feb 21th at 11:00pm",
//     "reminder": true
//   }