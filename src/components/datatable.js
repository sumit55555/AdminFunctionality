import React, { useState, useEffect } from 'react';

const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the headers for the API request
        const headers = new Headers();
        headers.append('masterdetailId', '6b623f64-ed4c-46fb-88f0-ce700aa6fcb1');
        headers.append('openStoreId', '9fc7e05f-eb24-4846-b728-08d1d340e37b');

        // Fetch data from the API
        fetch('https://bizonapi.sufalam.live/api/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[skip]=0&filter[limit]=5', {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            });


    }, []);

    // Render the data table
    return (
        <table>
            <thead>
                <tr>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>productno</th>
                            <th>price</th>
                            <th>availablequantity</th>
                        </tr>
                    </thead>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.productno}</td>
                        <td>{item.price}</td>
                        <td>{item.availablequantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;

