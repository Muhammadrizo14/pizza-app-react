import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/pizzaBlock";
import ContentLoader from "react-content-loader";
import axios from "axios";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import {useSelector} from "react-redux";




const Home = () => {

    const categoryId = useSelector((state) => state.filter.catId)


    const {searchValue} = useContext(SearchContext)


    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const sortBy = useSelector((state) => state.filter.sort)


    const  getAllPizzas =  () => {
        const category = categoryId ? `category=${categoryId}` : ''
        const search = searchValue ? `&q=${searchValue}` : ''
        const sort = sortBy ? `&_sort=${sortBy.sort}&_order=desc` : ''

        setLoading(true)
        axios.get(`http://localhost:5000/posts?_page=${currentPage}&_limit=4&${category}${search}${sort}`)
            .then(res => {
                setPizzas(res.data);
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
                console.log(err)
            })
    }
    useEffect(() => {
        getAllPizzas()
    }, [categoryId, sortBy, searchValue, currentPage])


    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {!loading ? (
                    <>
                        {
                            pizzas.map(item => (
                                <PizzaBlock
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={280}
                            height={460}
                            viewBox="0 0 280 460"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="140" cy="88" r="72"/>
                            <rect x="10" y="211" rx="0" ry="0" width="266" height="30"/>
                            <rect x="10" y="246" rx="0" ry="0" width="266" height="88"/>
                            <rect x="10" y="359" rx="0" ry="0" width="266" height="58"/>
                        </ContentLoader>
                    </>
                )
                }
                {error !== '' ? (
                    <h1>{error}</h1>
                ) : null}
            </div>
            <Pagination onChangePage={setCurrentPage}/>

        </>
    );
};

export default Home;