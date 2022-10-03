import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";


function TableProductComp(props: any) {

  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>codigo</th>
          <th>Descripcion</th>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((p: any, index: number) => (
          <tr key={index}>
            <td>{p.id}</td>
            <td>{p.codigo}</td>
            <td>{p.descripcion}</td>
            <td>{p.foto}</td>
            <td>{p.nombre}</td>
            <td>{p.precio}</td>
            <td>{p.stock}</td>
            <td><Button onClick={() => props.deleteProduct(p.id)} variant="danger">Delete</Button></td>
            {props.settingUpdateData !== undefined ? <td><Button onClick={() => props.settingUpdateData(p)} variant="dark" >Update</Button></td> : null}


          </tr>
        ))}

      </tbody>
    </Table>

  );
}

export default TableProductComp