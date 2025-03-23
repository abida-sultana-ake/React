//Method - 1
// export default function ToDo(props){
//     return(
//         <li>Task: {props.task} </li>
//     )
// }

// Most useable method 
// export default function ToDo({task}){
//     return(
//         <li>Task: {task} </li>
//     )
// }

//condition 
export default function ToDo({task, isDone}){
    if(isDone === true) {
        return <li>Done: {task} </li>
    }
    else {
        return <li>Pending: {task} </li>
    } 
}