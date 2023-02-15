import React, {useEffect, useState} from 'react';
import ContentLoader from "react-content-loader";

const PizzaBlock = (props) => {


    let {title, price,sizes, imageUrl, types} = props

    const typeList = ['тонкое', 'традиционное']



    const [count, setCount] = useState(0)



    const addOrder  = () => {
        setCount(count+1)
    }





    useEffect(()=>{
        let pizzaBlocks = document.querySelectorAll('.pizza-block')

        pizzaBlocks.forEach((pizzaBlock)=> {
            let typeItems = pizzaBlock.querySelectorAll('.type__item')
            let sizeItems = pizzaBlock.querySelectorAll('.size__item')


            typeItems[0].classList.add('active')
            typeItems.forEach((item)=> {
                item.addEventListener('click', (currentItem)=> {
                    typeItems.forEach(item=> {
                        item.classList.remove('active')
                    })
                    currentItem.target.classList.add('active')
                })
            })


            sizeItems[0].classList.add('active')

            sizeItems.forEach((item)=> {
                item.addEventListener('click', (currentItem)=> {
                    sizeItems.forEach(item=> {
                        item.classList.remove('active')
                    })
                    currentItem.target.classList.add('active')
                })
            })
        })







    },[])
















    return (
        <div className="pizza-block">

            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, i)=> (
                        <li className="type__item" key={i}>{typeList[type]}</li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, i)=> (
                        <li key={i} className="size__item">{size} см.</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div onClick={addOrder} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{count}</i>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;