let products = [{
        img: "images/products/1.jpg",
        name: "Худи укороченное",
        desc: "Лиловое худи с капюшоном из футера трёхнитки с начёсом",
        price: 2599
    },
    {
        img: "images/products/2.jpg",
        name: "Костюм двойка",
        desc: "Розовый костюм из футера трёхнитки с начёсом",
        price: 4699
    },
    {
        img: "images/products/3.jpg",
        name: "Свитшот",
        desc: "Зеленый свитшот из футера трёхнитки с начёсом",
        price: 2599
    },
    {
        img: "images/products/4.jpg",
        name: "Худи укороченное",
        desc: "Лиловое худи с капюшоном из футера трёхнитки с начёсом",
        price: 2599
    },
    {
        img: "images/products/5.jpg",
        name: "Пальто-рубашка",
        desc: "Тёмно-малиновая рубашка из футера трёхнитки с начёсом",
        price: 4999
    },
    {
        img: "images/products/6.jpg",
        name: "Костюм двойка",
        desc: "Розовый костюм из футера трёхнитки с начёсом",
        price: 4699
    },

];


function createElement(name, attribute = {}, inner = null) {
    let element = document.createElement(name);
    for (att in attribute) {
        element.setAttribute(att, attribute[att]);
    }
    if (inner) {
        element.innerHTML = inner;
    }
    return element;
}

function addChild(element, children) {
    for (child of children) {
        element.appendChild(child);
    }
}


let sw = document.getElementById("sw");

for (product of products) {
    let figure = createElement("figure", { "class": "card swiper-slide" });
    let img = createElement("img", { "class": "card-picture", "src": product.img });
    let figcaption = createElement("figcaption");
    let h3 = createElement("h3", { "class": "regular-text fix-height" }, product.name);
    let p1 = createElement("p", { "class": "fix-height" }, product.desc);
    let p2 = createElement("p", {}, product.price + "руб./шт.");
    let button = createElement("button", { "class": "btn regular-text" }, "Заказать");
    let element = structuredClone(product);
    button.onclick = function() {
        data.push(element);
    }
    const fb = document.querySelector('#fb');

    button.addEventListener('click', () => {
      fb.scrollIntoView({behavior: "smooth"});
    });

    addChild(figcaption, [h3, p1, p2, button]);
    addChild(figure, [img, figcaption]);
    addChild(sw, [figure]);
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal', //Переключение слайдера
    loop: true,
    speed: 1000,
    slidesPerView: 3, // Количество видимых карточек на слайдере
    spaceBetween: 10, //Расстояние между карточками
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@2.00": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },


});

document.getElementById("feedbackbtn").onclick = function () {
    if (document.getElementById("fbname").value === "") {
        alert("Заполните поле имя");
    } else if (document.getElementById("fbphone").value === "") {
        alert("Заполните поле телефон");
    } else if (document.getElementById("fbcomment").value === "") {
        alert("Оставьте комментарий или вопрос, который вас интересует");
    };
    // } else if (document.getElementById("checkbox").value === "") {
    //     alert("Пожалуйста, примите условия передачи данных");

    document.getElementById("feedbackbtn").onclick = function validate() {
        if (document.getElementById('checkbox').checked) {
            alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
        } else {
            alert("Пожалуйста, примите условия передачи данных");
        }
    }   
    }


data = [];