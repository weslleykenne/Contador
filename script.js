function contar() {
var ini = document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.length == 0) {
    window.alert('[Erro] falta dados!')
    res.innerHTML = 'Impossivel contar!'
} else {
    res.innerHTML = 'Contando: <br>' 
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if ( p <= 0) {
        window.alert(' passo invalido ! Considerando PASSO 1 ')
        p = 1
    }
    if (i < f) {
        // Contagem crescente
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
        }
       
    } else {
        //Contagem Regressiva
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3C1}`
    

  }
}