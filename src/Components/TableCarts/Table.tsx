import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";


function TableCartComp(props: any) {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                </tr>
            </thead>
            <tbody>
                {props.carts.map((cart: any, index: number) => (
                    <tr key={index}>
                        <td>{cart}</td>
                        <td><Button onClick={() => props.seeProducts(cart)} >See Products</Button></td>
                        <td><Button onClick={() => props.deleteCart(cart)} variant="danger">Delete</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>

    );
}

export default TableCartComp