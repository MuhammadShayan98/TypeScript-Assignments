var table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
var row = table.insertRow(0)


fetch('https://dummyjson.com/products')
.then((data)=>{
    return data.json()
})
.then((objData)=>{
    let tableData = '';
    
    objData.map((values)=>{
        tableData+= `<tr>
        <td>${values.id}<td> 
        <td>${values.title}<td>
        <td>${values.description}<td>
        <td>${values.price}<td>
        </tr>`
    });
    <HTMLTableElement> document.getElementById("myTable") = tableData;
    var row = table.insertRow(0)            
})