const form = document.getElementById('números');

form.addEventListener('submit', function(e){    
    e.preventDefault();
    
    let campoA = document.getElementById('campoa').value;
    let campoB = document.getElementById('campob').value;

    if (campoA < campoB){
        document.querySelector('.valido').style.display = 'block';
    } if (campoA == campoB) {
        document.querySelector('.nãoValido1').style.display = 'block';
    } if (campoA > campoB) {
        document.querySelector('.nãoValido2').style.display = 'block';
    }
})

console.log(form);