function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == '1' && senha == '1') {
        alert('Sucesso')
        location.href = "home.html";
    }
    else {
        alert('Usuário ou senha incorretos');
    }

}