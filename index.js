var campoNome = document.getElementById('campoNome');
var btnOk = document.getElementById('btnOk');
       btnOk.onclick = calculaIdade;

        var btnLimpar = document.getElementById('btnLimpar');
        btnLimpar.addEventListener('click', limpar);

       function calculaIdade(){
          
            var ano =  new Date().getFullYear();
            var nascimento = campoIdade.value.trim();

            var idade = ano - nascimento;

            var menssagem = 'Idade: ' + idade + ' ano(s).';
            document.getElementById('menssagemIdade');
            menssagemIdade.innerText = menssagem; 
       } 
       
       function limpar(){
            var idade = campoIdade.value.trim();            
            document.getElementById('menssagemIdade');
            menssagemIdade.innerText = '';
       }