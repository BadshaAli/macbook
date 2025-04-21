const el = document.getElementsByTagName("button");


// for (let i = 0; i < el.length; i++) {

//     el[i].addEventListener("click", function () {
        
//         if (el[i].id === "8gb-memory") {
//             customizationPrice("memory-cost", 0);
//         } else if (el[i].id === "16gb-memory") {
//             customizationPrice("memory-cost", 150);
//         } else if (el[i].id === "256gb-storage") {
//             customizationPrice("storage-cost", 0);
//         } else if (el[i].id === "512gb-storage") {
//             customizationPrice("storage-cost", 100);
//         } else if (el[i].id === "1tb-storage") {
//             customizationPrice("storage-cost", 200);
//         } else if (el[i].id === "late-delivery") {
//             customizationPrice("delivery-cost", 0);
//         } else if (el[i].id === "early-delivery") {
//             customizationPrice("delivery-cost", 20);
//         } else {
//             promoCode();
//         }
//     });

// }

for (let i = 0; i < el.length; i++) {

    el[i].addEventListener("click", function () {
        
        if (i == 0) customizationPrice("memory-cost", 0);
        else if (i == 1) customizationPrice("memory-cost", 150);
        else if (i == 2) customizationPrice("storage-cost", 0);
        else if (i == 3) customizationPrice("storage-cost", 100);
        else if (i == 4) customizationPrice("storage-cost", 200);
        else if (i == 5) customizationPrice("delivery-cost", 0);
        else if (i == 6) customizationPrice("delivery-cost", 20);
        else promoCode();

    });
}


function promoCode() {

    const promoCode = document.getElementById("promo-code").value.toLowerCase();
    document.getElementById("promo-code").value = "";

    if(promoCode === "ostad"){
        
        const mainPrice = document.getElementById("total-price").textContent;

        const discountedPrice = 0.9 * parseInt(mainPrice);
        document.getElementById("user-payment").textContent = discountedPrice.toFixed(2);
    }    
}

function updateTotal() {

    const basePrice = 1299;
    const memoryCost = parseInt(document.getElementById("memory-cost").textContent);
    const storageCost = parseInt(document.getElementById("storage-cost").textContent);
    const deliveryCost = parseInt(document.getElementById("delivery-cost").textContent);
    return basePrice + memoryCost + storageCost + deliveryCost;
}

function customizationPrice(id, cost) {

    document.getElementById(id).textContent = cost;
    
    const totalPrice = document.getElementById("total-price");
    totalPrice.textContent = updateTotal();

    document.getElementById("user-payment").textContent = totalPrice.textContent;
}