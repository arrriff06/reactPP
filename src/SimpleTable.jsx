export default function SimpleTable(){
    const data = [
        { name: "Arif", age: 19},
        { name: "Sarthak", age: 20},
        { name: "Pami", age: 25},

    ]

//render a plain table
return(
    <div style= {{ padding: "20px"}}>
        <h2> Basic React Table(No library)</h2>
        <table border= "1" cellPadding="8" style={{borderCollapse: "collapse"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (

                    <tr key={index}>

                        <td>{row.name}</td>
                        <td>{row.age}</td>
            </tr>
 
          ))}
        </tbody>
        </table>

    </div>
);
}