setTimeout(apresentarModal, 5000);

function apresentarModal() {
    var modal = document.querySelector('.modal');

    if(modal){

        document.querySelector('.modal').style.display = 'block';

            document.querySelector('.modal a').addEventListener('click', function() {
                document.querySelector('.modal').style.display = 'none';
            })
    }
}

if (document.forms['modalForm']) {
    //    validação
    var form = document.forms['modalForm'];
    
    form.addEventListener('submit', validarFormModal);
}

function validarFormModal(evt) {
    var form = document.forms['modalForm'];

    var email = form.email.value;
    
    if(email !== '' && email.indexOf('@') > 0 && email.indexOf('.') > email.indexOf('@')) {
        alert('Email válido!');
    } else {
        alert('Email inválido!');
        
        evt.preventDefault();
    }
}
