// function calculoMedia(a,b,c){
//     let resultado = (a + b + c)/3;
//     return resultado;
// }

// function calculoExame(nota){
//     let resultado = 10 - nota;
//     return resultado;
// }

function calcularCPF(cpf){

    let total = 0;

    for (i=0;i<9;i++){ 
        total = total + ((10+i)*cpf[i])};
        
    

    let resto = total % 11;

    return resto;

}

$('#inputOla').click(

    function(){
        console.log(calcularCPF("07163927126"));
    }
)


// }

// function calcularDelta(a,b,c){
//     let delta = b*b - (4*a*c);
//     return delta;
// }

// function calcularx1(a,b,c){
//     let x1 = (-1*b + Math.sqrt(delta)) / 2* a;
//     return x1;
// }

// alert(calcularx2)

// function calcularx2(a,b, delta){
//     let x2 = (-1*b + Math.sqrt(delta)) / 2* a;
//     return x2;

    
// }

// $('#inputOLa').click(
//     function()
        


//         notas = 
//         {
//             'N1':parseInt(document.getElementById('inputA').value),
//             'N2':parseInt(document.getElementById('inputB').value),
//             'N3':parseInt(document.getElementById('inputC').value)
//         }
 
//         let delta = calcularDelta(notas.N1, notas.N2, notas.N3); 

//         alert(delta);
    

//           cadastro = 
//           {
//              'nome':document.getElementById('inputNome').Value,
//              'endereco':document.getElementById('inputEndereco').Value,
//              'email':document.getElementById('inputEmail').Value,
//       }
//           alert('cadastro.nome');
//             calculo = 

//          notas = 
//          {
//              'N1':document.getElementById('inputA').value,
//              'N2':document.getElementById('inputB').value,
//              'N3':document.getElementById('inputC').value
//          }
//         let media = calculoMedia(
//              parseInt(calculo.N1),
//              parseInt(calculo.N2),
//              parseInt(calculo.N3)
//             )



//             let media = ((parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3)

//             if (media >=7){
//              alert('Voce foi aprovado!');
//             } else {
//              let noteExame = 10 - media
//             alert('Voce ficou de exame! Você precisa tirar '+ notaExame);
//         }
        
        
        
        
    








    
//)