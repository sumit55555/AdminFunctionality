import React, { useState, useEffect } from "react";

const SortingData = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortedData1, setSortedData1] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    // Define the headers for the API request
    const headers = new Headers();
    headers.append("masterdetailId", "6b623f64-ed4c-46fb-88f0-ce700aa6fcb1");
    headers.append("openStoreId", "9fc7e05f-eb24-4846-b728-08d1d340e37b");

    // Fetch data from the API
    fetch(
      "https://bizonapi.sufalam.live/api/products?filter[include]=productbrand&filter[include]=productmedia&filter[i    nclude]=category&filter[where][productstatus]=1&filter[order][0]=price%20DESC&filter[skip]=0&filter[limit]=20",
      {
        method: "GET",
        headers,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);


  const handleLowToShort = () => {
    setSortedData(data.sort((a, b) => b.price - a.price));
    setShowData(true);
  };
  const handleShortTOLow = () => {
    setSortedData1(data.sort((a, b) => a.price - b.price));
    setShowData(false);
  };

  // Render the data table
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={handleLowToShort}>SortLowToHigh</button>
      <button className="btn btn-primary m-2" onClick={handleShortTOLow}>SortHighToLow</button>
      {showData ? (
        sortedData.map((item) => (

          <table className="table table-bordered" key={item.id} >
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.productno}</td>
                <td>{item.price}</td>
                <td>{item.availablequantity}</td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <div>
          {" "}
          {sortedData1.map((item) => (
            <table className="table table-bordered">
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
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.productno}</td>
                  <td>{item.price}</td>
                  <td>{item.availablequantity}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortingData;
