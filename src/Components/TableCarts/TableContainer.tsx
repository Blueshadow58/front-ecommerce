import React, { useEffect, useRef, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { getAllCarts, deleteById, create, getById, addProductToCart, deleteProductCart } from '../../Api/services/Carts'
import TableCartComp from './Table'
import TableProductComp from '../TableProducts/Table'

export default function TableCartContainer() {
    const [carts, setCarts] = useState([])
    const [reload, setReload] = useState(false)
    const [loading, setLoading] = useState(false)
    const [productsInCart, setProductsInCart]: any = useState([])
    const inputProducto: any = useRef(null)
    const inputCart: any = useRef(null)


    useEffect(() => {
        setLoading(false)
        getAllCarts().then(products => {
            setCarts(products);
            setLoading(true)
        }).catch(error => console.log(error))

    }, [reload])


    const createCart = () => {
        try {
            create().then(response => {
                console.log(response)
                setReload(!reload)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCart = async (id: any) => {
        try {
            await deleteById(id).then(response => {
                console.log(response)
                setReload(!reload)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const seeProducts = async (id: any) => {
        try {
            getById(id).then(response => {
                const productsData: any = { idCart: id, data: response }
                console.log(productsData)
                setProductsInCart(productsData)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = async () => {
        const idCart = inputCart.current.value;
        const idProduct = { id: `${inputProducto.current.value}` };
        if (idCart !== '' && inputProducto.current.value !== '') {
            await addProductToCart(idCart, idProduct).then(response => {
                seeProducts(idCart)
            })
        }
    }

    const deleteProductInCart = (id: any) => {
        deleteProductCart(productsInCart.idCart, id).then(response => {
            console.log(response)
            seeProducts(productsInCart.idCart)
        })
    }

    return (
        <Container className='pt-5' >

            <Button variant='dark' className='mb-3' onClick={() => createCart()}>Create Cart</Button>

            <div className="input-group mb-3">
                <input ref={inputProducto} type="text" className="form-control" placeholder="id producto" />
                <input ref={inputCart} type="text" className="form-control" placeholder="id cart" />
                <Button onClick={() => addToCart()} >Add to cart</Button>
            </div>

            {loading ? <TableCartComp carts={carts} deleteCart={deleteCart} seeProducts={seeProducts} /> : <div>...Loading</div>}

            {productsInCart.length !== 0 ? <TableProductComp products={productsInCart.data} deleteProduct={deleteProductInCart} /> : <>No existen productos en este carro</>}

        </Container>
    )
}
