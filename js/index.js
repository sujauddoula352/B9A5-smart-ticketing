const seats = document.querySelectorAll('.kbd');
for (let seat of seats) {
    seat.addEventListener("click", function () {
        const seatName = seat.innerText;
        const price = document.querySelector("#ticket-price").innerText;
     
        const ticketTitleContainer = document.getElementById("seat-title-container");
        const addToCardContent = document.createElement('div');
        addToCardContent.classList.add("text-xl", "mt-8", "flex", "justify-between", "mx-8", "mb-4");

        const h3 = document.createElement('h3');
        h3.innerText = seatName;
        h3.classList.add("text-xl");
        addToCardContent.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = 'Economy';
        p.classList.add("text-xl");
        addToCardContent.appendChild(p);
        const h2 = document.createElement('h2');
        h2.innerText = price;
        h2.classList.add('text-2xl');
        addToCardContent.appendChild(h2);
        ticketTitleContainer.appendChild(addToCardContent);
    });
}
