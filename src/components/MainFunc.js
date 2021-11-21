// import React from "react";
// import { useState, useEffect } from "react";

// import Task from "./Task";

// import { Card } from "react-bootstrap";

// const Main = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: "Hello",
//       done: false,
//     },
//   ]);

//   //   componentDidMount() {
//   //       window.addEventListener('focus, this.onFocus');
//   //   }

//   //   componentWillUnmount() {
//   //       window.removeEventListener("focus", this.onFocus)
//   //   }
//   // onfocus = () => {
//   //   return "Hey";
//   // };

//   useEffect(() => {
//     window.addEventListener("focus", onfocus);
//     console.log("Testing re-render");
//     return () => {};
//   }, []);

//   return (
//     <div>
//       <Card>
//         <Card.Body>
//           <div className="tasks-container">
//             {tasks.map((task) => (
//               <Task key={task.id} task={task} />
//             ))}
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Main;
