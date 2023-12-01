import React, {useState, useEffect} from 'react';
import Header from '../Global Components/Header';
import {Table} from 'react-bootstrap';

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let result = await fetch("http://localhost:8000/api/list");
            result = await result.json();
            setData(result);
        }

        fetchData();
    }, []);

    return (
        <div>
            <Header/>
            <h1>Product list</h1>
            <div className="col-sm-8 offset-sm-2">
            <Table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                </tr>
                    {
                        data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{width:100}}  src= {"http://localhost:8000/" + item.file_path}/></td>
                        </tr>
                        )
                    }

            </Table>
            </div>
        </div>
    )
}

export default ProductList;