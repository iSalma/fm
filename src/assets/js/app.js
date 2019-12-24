//js

let jQ = $.noConflict();

var allData = [];
var httpReq = new XMLHttpRequest();
getData();


function getData() {

    httpReq.open("GET", "https://5bcce576cf2e850013874767.mockapi.io/task/categories")
    httpReq.send(); 
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {

            allData = JSON.parse(httpReq.response) 
            displayData();
            console.log(allData)
        }
    }
}

function displayData() {
    let temp = ``;

    for (let i = 0; i < allData.length; i++) {
        temp += `
        <div>
          <div class="item">
            <h1>`+ allData[i].name + `</h1>
            <img src="`+ allData[i].category_img + `" />
            <h3>Products</h3>
            <h4>Name:`+ allData[i].products[i].name + `</h4>
            <img src="`+ allData[i].products[i].product_img + `"/>
            <h4>Weight:`+ allData[i].products[i].weight + `</h4>
            <h4>Price:`+ allData[i].products[i].price + `</h4>
          </div>
        </div>`;
    }

    document.getElementById("rowData").innerHTML = temp;
}

jQ("#categoryBtn button").click(function () {
    let category = jQ(this).text();
    console.log(category)
    let temp = ``;
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].name == `${category}`) {
            temp += `
            <div >
            <div class="item">
                <h1>`+ allData[i].name + `</h1>
                <img src="`+ allData[i].category_img + `"/>
                <h3>Products</h3>
                <h4>Name:`+ allData[i].products[i].name + `</h4>
                <img src="`+ allData[i].products[i].product_img + `" />
                <h4>Weight:`+ allData[i].products[i].weight + `</h4>
                <h4>Price:`+ allData[i].products[i].price + `</h4>
            </div>
            </div>`;
        }
     
    }
    document.getElementById("rowData").innerHTML = temp; 
})

jQ("#categoryBtn #allSection").click(function () {
    displayData();
})
