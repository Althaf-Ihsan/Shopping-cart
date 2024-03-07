import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import axios from 'axios'
import { ProductTitle } from '../Components/Header/Index'
const Home = () => {
    const [products, setProducts] = useState([])
    const [Loading, setLoading] = useState(false)
    async function fetchProductList() {
        setLoading(true)
        const data = await axios.get("https://fakestoreapi.com/products")
        if (data) {
            setLoading(false)
            setProducts(data.data)
        }
    }
    useEffect(() => {
        fetchProductList()
    },[])
    return (
        <div>
            {
                Loading ? (<div className='min-h flex justify-center items-center w-ful'>
                    <Circles
                        height="80"
                        width="80"
                        color="rgb(127,29,29)"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>) : (<div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl  mx-auto p-3'>
                    {
                        products && products.length ?
                            products.map((product, i) => <ProductTitle product={product} key={i} />)
                            : null
                    }
                </div>)
            }
        </div>
    )
}

export default Home