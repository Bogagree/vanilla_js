import React from 'react';
import './App.css';
import Lesson1 from './lessons/lesson1/lesson1';
import './lessons/lesson2/lesson2';
import Lesson4 from "./lessons/lesson4/Lesson4";
// import Lesson3 from './lessons/lesson3/Lesson3';
// import Lesson4 from './lessons/lesson4/Lesson4';
// import './lessons/lesson5/lesson5';
// import './lessons/lesson6/lesson6';
// import './lessons/lesson7/lesson7';
// import './lessons/lesson8/lesson8';

function App() {
    return (
        <div className="container">
            <Lesson1 />
            {/*<Lesson3 />*/}
            {/*<Lesson4 />*/}
        </div>
    );
};

export default App;

// import { useMemo } from "react";
// import { User } from "./user.js";
// import * as ga from "./ga";
//
// const UserList = ({ userList, isNeedFilter }) => {
//     const preparedUserList = isNeedFilter
//         ? useMemo(() => [...userList].sort(), [userList])
//         : userList;
//
//     const onClickHandler = useCallback(() => ga.clickUser(),[])
//
//     const style = useMemo(() => {
//         width: "100px",
//     }, [])
//
//     return (
//         <>
//             {preparedUserList.map((user) => (
//                 <User
//                     {...user}
//                     key={user}
//                     style={style}
//                     onClick={onClickHandler}
//                 />
//             ))}
//         </>
//     );
// };

