/* Author: 

*/
function ajaxtask() {

var btn = document.querySelector('.btn');
var table_body = document.querySelector('.table-body');
var n = 6;

var xhr = new XMLHttpRequest();


    xhr.open('get', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onreadystatechange = responseData;

    function responseData() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response_data = JSON.parse(xhr.responseText);
            var tableData = " ";
            for (var i = 0; i < n; i++) {
                tableData += "<tr><td>" + response_data[i].title +
                    "</td><td>" + response_data[i].body +
                    "</td></tr>";
            }
            table_body.innerHTML = tableData; 

        }
        else {
            table_body.innerHTML ="data not load..." ;
        }
    }
    xhr.send();


btn.addEventListener('click',function(){
    n = n+6;
    if(n==96){
        n=100;
        btn.style.display = "none";
    }
    responseData();
})

}
ajaxtask();