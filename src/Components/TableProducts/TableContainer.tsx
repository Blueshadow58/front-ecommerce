import React, { useRef } from 'react'
import { Container } from "react-bootstrap";
import TableProductComp from './Table'
import { useEffect, useState } from 'react';
import { deleteById, getAllProducts, getById, save, update } from '../../Api/services/Product';
import { Button } from 'react-bootstrap';

export default function TableProductContainer(props: any) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  const [id, setId] = useState(null)
  const refInput: any = useRef(null);
  const refInputCodigo: any = useRef(null);
  const refInputDescription: any = useRef(null);
  const refInputPhoto: any = useRef(null);
  const refInputName: any = useRef(null);
  const refInputPrice: any = useRef(null);
  const refInputStock: any = useRef(null);

  useEffect(() => {
    props.funcNav(true)
  }, [props])

  useEffect(() => {
    setLoading(false)
    getAllProducts().then(products => {
      setProducts(products);
      setLoading(true)
    }).catch(error => console.log(error))

  }, [reload])


  const findProduct = () => {
    const inputValue = refInput.current.value
    let valueExist = products.some((product: any) => product.id === inputValue)
    console.log(valueExist)
    if (valueExist) {
      getById(inputValue).then(product => {
        const productSelected: any = [product]
        setProducts(productSelected);
      }).catch(error => console.log(error))
    } else {
      setReload(!reload)
    }
  }

  const saveProduct = async () => {
    const product = {
      nombre: refInputName.current.value,
      descripcion: refInputDescription.current.value,
      codigo: refInputCodigo.current.value,
      foto: refInputPhoto.current.value,
      precio: refInputPrice.current.value,
      stock: refInputStock.current.value
    }
    let isEmpty = Object.values(product).every(x => x === null || x === '');
    if (!isEmpty) {
      try {
        await save(product).then(response => {
          console.log(response)
          setReload(!reload)
        })
      } catch (error) {
        console.log(error)
      }
    }
    refInputName.current.value = ''
    refInputDescription.current.value = ''
    refInputCodigo.current.value = ''
    refInputPhoto.current.value = ''
    refInputPrice.current.value = ''
    refInputStock.current.value = ''
  }

  const deleteProduct = (id: any, e: any) => {
    try {
      deleteById(id).then(response => {
        setReload(!reload)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const settingUpdateData = (product: any) => {
    setId(product.id)
    refInputName.current.value = product.nombre
    refInputDescription.current.value = product.descripcion
    refInputCodigo.current.value = product.codigo
    refInputPhoto.current.value = product.foto
    refInputPrice.current.value = product.precio
    refInputStock.current.value = product.stock
  }
  const updateProduct = () => {
    const product = {
      id: id,
      nombre: refInputName.current.value,
      descripcion: refInputDescription.current.value,
      codigo: refInputCodigo.current.value,
      foto: refInputPhoto.current.value,
      precio: refInputPrice.current.value,
      stock: refInputStock.current.value
    }
    try {
      update(product).then(response => {
        console.log(response)
        setReload(!reload)
        setId(null)
      })
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <Container className='pt-5'>
        <div className="input-group mb-3">
          <input ref={refInput} type="text" className="form-control" placeholder="find by id" />
          <Button onClick={() => findProduct()}>Find</Button>
        </div>
        <div className="input-group mb-3 " >
          <input ref={refInputCodigo} type="text" className="form-control" placeholder="code" />
          <input ref={refInputDescription} type="text" className="form-control" placeholder="description" />
          <input ref={refInputPhoto} type="url" className="form-control" placeholder="photo" />
          <input ref={refInputName} type="text" className="form-control" placeholder="name" />
          <input ref={refInputPrice} type="number" className="form-control" placeholder="price" />
          <input ref={refInputStock} type="number" className="form-control" placeholder="stock" />
          <Button onClick={() => saveProduct()}>Save</Button>
          {id && <Button variant='dark' onClick={() => updateProduct()}>Update</Button>}
        </div>
        {loading ? <TableProductComp products={products} deleteProduct={deleteProduct} settingUpdateData={settingUpdateData} /> : <>...Loading</>}
      </Container>
    </>
  )
}
