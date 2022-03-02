fetch('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(advices => {
        console.log(advices);
        console.log(advices.slip.advice);
        console.log(advices.slip.id);
        
        let id = advices.slip.id;
        let advice = advices.slip.advice;

        document.getElementById('id').innerHTML = `ADVICE #${id}`
        document.getElementById('text').innerHTML = `"${advice}"`;
    })

function diceAdvice() {
    const icon = document.getElementById('icon');
    icon.setAttribute("class", "rotated-image");
    location.reload();
}