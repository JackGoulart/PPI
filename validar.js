function validar() {
	var formulario = document.getElementById("info");
	var nome = formulario.nome.value;
	var email = formulario.email.value;
	var senha = formulario.senha.value;
	var senha2 = formulario.rep_senha.value;
	var tel = formulario.tel.value;

	if (nome == "") {
		alert('Preencha o campo com seu nome');
		info.nome.focus();
		return false;
	}
	if (email == "") {
		alert("Preencha o campo com seu email");
		info.email.focus();
		return false;
	}
	if (tel == "") {
		alert("Preencha o campo com seu Telefone");
		info.tel.focus();
		return false;
	}
	if (isNaN(tel)) {
		alert("O campo Telefone deve conter apenas  ");
		info.tel.focus();
		return false;
	}
	if(senha2 == ""){
		alert("Preencha o campo com sua Confirmacao");
		info.rep_senha.focus();
		return false;
	}
	if (senha!= senha2) {
		alert('Senhas diferentes');
		info.rep_senha.focus();
		return false;
	}
	alert("Obrigado "+nome+"\n Cadastro efetuado com Sucesso");

}