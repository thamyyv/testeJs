function calcular() {
    var num = document.getElementById('num').value;
    var res = document.getElementById('res');

    if(num === '' || isNaN(num) || num === '0'){
        window.alert('Preencha com um número diferente de 0');
    } else {
        var n = Number(num);
        var c = 1;
        res.innerHTML = ``
        while(c <= 10){
            var item =  document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            res.appendChild(item);
            c++;
        }
    }
}
