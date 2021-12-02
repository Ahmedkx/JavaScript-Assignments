let cardTitle = "Elzero", cardDescription = "Elzero Web School", cardTime = "25/10";

let card = `<div class="card"> 
<h3>Hello ${cardTitle}</h3>
<p>${cardDescription}</p>
<span>${cardTime}</span>
</div>`;

document.write(`${card.repeat(4)}`);