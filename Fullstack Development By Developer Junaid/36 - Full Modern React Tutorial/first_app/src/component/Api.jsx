
import React, { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDeleteUser = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const filteredData = data.filter((item) => {
    return item.username.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Using API to Get User Data:</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Enter User Name"
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.username}{" "}
            <button onClick={() => handleDeleteUser(item.id)}> Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api;







// import React, { useState, useEffect } from "react";

// function Api() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonData = await response.json();
//     setData(jsonData);
//   };

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     return item.username.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <div >
//       <h1>Using API to Get User Data:</h1>
//       <input
//         type="text"
//         value={search}
//         onChange={handleSearchChange}
//         placeholder="Enter User Name"
//       />
//       <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>{item.username}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Api;
