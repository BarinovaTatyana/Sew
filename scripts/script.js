function toProducts() {
    let products = document.getElementById("products");
    products.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function showModal() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    createBasket();
    allPrice();
}

function hideModal() {
    let modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}