setTimeout(apresentarModal, 1000);

function apresentarModal() {
    var modal = document.querySelector('.modal');

    if(modal){

        document.querySelector('.modal').style.display = 'block';

            document.querySelector('.modal a').addEventListener('click', function() {
                document.querySelector('.modal').style.display = 'none';
            })
    }
}


// formulario do modal
if (document.forms['modalForm']) {
    //    validação
    var form = document.forms['modalForm'];
    
    form.addEventListener('submit', validarFormModal);
    
     form.email.addEventListener('keyup', function() {
         form.email.className = '';
         document.querySelector('span.invalido').style.display = 'none';
     });
}

function validarFormModal(evt) {
    var form = document.forms['modalForm'];

    var email = form.email.value;
    
    if(validarEmail(email)) {
        alert('Email válido!');
    } else {        
        form.email.className = 'invalido';
        document.querySelector('span.invalido').style.display = 'block';
        
        evt.preventDefault();
    }
}


//formulario de contato

if (document.forms['contatoForm']) {
    //    validação
    var form = document.forms['contatoForm'];
    
    form.addEventListener('submit', validarFormContato);

}

function validarFormContato(evt) {
    var form = document.forms['contatoForm'];
    
    var formValido = true;
    
    
    if(!naoVazio(form.nomeCompleto.value)) {
        form.nomeCompleto.className = 'invalido';
        formValido = false;
    }

    if(!naoVazio(form.telefone.value)) {
        form.telefone.className = 'invalido';
        formValido = false;
    }

    if(!naoVazio(form.mensagem.value)) {
        form.mensagem.className = 'invalido';
        formValido = false;
    }

    if(!validarEmail(form.email.value)) {
        form.email.className = 'invalido';
        formValido = false;
    }

    if(!formValido) {
        evt.preventDefault();
    }
    
    
    var inputs = document.querySelectorAll('form[name=contatoForm] input[type=text]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keypress', function(){
        this.className = '';
        })
    }
    
    var textarea = document.querySelector('form[name=contatoForm] textarea');
        textarea.addEventListener('keyup', function(){
        this.className = '';
            
        document.querySelector('.qtdCaractere').innerHTML = 'Caractere(s): ' + this.value.length;
    })
    
}






/* funções genéricas */

function validarEmail(email) {
    if(
    email !== '' && email.indexOf('@') > 0 && email.indexOf('.') > email.indexOf('@')
    ) {
        return true;
    } else {
        return false;
    }
}

function naoVazio(texto) {
    console.log(texto);
    if(texto.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}
