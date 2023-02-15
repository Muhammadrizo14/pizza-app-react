import React, {useEffect, useState,} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCatId} from "../redux/slices/filterSlices";

const Categories = () => {

    const filter = useSelector((state) => state.filter.catId)
    const dispatch = useDispatch()

    const items = ['Все', 'Мясные', 'Вегетарианская ', 'Гриль', 'Острые', 'Закрытые']




    return (
        <div className="categories">
            <ul>
                {items.map((item, i) => (
                    <li key={i} onClick={() => {
                        dispatch(setCatId(i))
                    }} className={filter === i ? 'active' : ''}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;