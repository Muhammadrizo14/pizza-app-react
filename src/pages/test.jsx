// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {addCat} from '../redux/slices/filterSlices'
// import {logDOM} from "@testing-library/react";
//
// const Test = () => {
//     const count = useSelector((state) => state.filter.value)
//     const [inputValue, setInputValue] = useState('')
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         console.log(count)
//     },[count])
//     return (
//         <div>
//             <div>
//                 <span>
//                     {count.map((cat, i) => (
//                         <h1 key={i}>{cat}</h1>
//                     ))}
//                 </span>
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}/>
//                 <button
//                     onClick={() => {
//                         dispatch(addCat(inputValue))
//                         setInputValue('')
//                     }}
//                 >
//                     click me
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default Test;