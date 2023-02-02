import React, { useState, useEffect } from 'react';

const Price = () => {
    const [data, setData] = useState([]);
     const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        // Define the headers for the API request
        const headers = new Headers();
        headers.append('masterdetailId', '6b623f64-ed4c-46fb-88f0-ce700aa6fcb1');
        headers.append('openStoreId', '9fc7e05f-eb24-4846-b728-08d1d340e37b');

        // Fetch data from the API
        fetch('https://bizonapi.sufalam.live/api/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[where][minPrice]=10&filter[where][maxPrice]=100000&filter[skip]=0&filter[limit]=20', {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            });


    }, []);

     useEffect(() => {
        setFilteredData(
            data.filter(item => {
                return item.price.toString().toLowerCase().includes(searchTerm.toLowerCase());
            })
        );
    }, [searchTerm, data]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    // Render the data table
    return (
        <div className='m-2'>
          <input
                type="text"
                className="form-control me-2"
                placeholder="Search by Price"
                value={searchTerm}
                onChange={handleChange}
            />
        <table className="table table-striped m-2" >      
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">productno</th>
                            <th scope="col">price</th>
                            <th scope="col">availablequantity</th>
                        </tr>
                    </thead>        
            <tbody>
             {filteredData.map(item => (
               
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
        </div>
    );
};

export default Price;
