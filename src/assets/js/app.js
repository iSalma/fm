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
            console.log(allData[0].products.length)
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
                <h3>Products</h3>`;
        for (let j=0; j< allData[i].products.length; j++) {
             temp+=`
             <div>
                <h4>Name:`+ allData[i].products[j].name + `</h4>
                <img src="`+ allData[i].products[j].product_img + `"/>
                <h4>Weight:`+ allData[i].products[j].weight + `</h4>
                <h4>Price:`+ allData[i].products[j].price + `</h4>
                </div>
              </div>
            </div>`;
        }
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
                <img src="`+ allData[i].category_img + `" />
                <h3>Products</h3>
                </div>`;
        for (let j=0; j< allData[i].products.length; j++) {
             temp+=`
             <div >
                <h4>Name:`+ allData[i].products[j].name + `</h4>
                <img src="`+ allData[i].products[j].product_img + `"/>
                <h4>Weight:`+ allData[i].products[j].weight + `</h4>
                <h4>Price:`+ allData[i].products[j].price + `</h4>
              </div>
              </div>
            `;
        }
        }

    }
    document.getElementById("rowData").innerHTML = temp;
})

jQ("#categoryBtn #allSection").click(function () {
    displayData();
})
