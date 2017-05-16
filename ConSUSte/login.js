function validarLogin(){
	var usuario = formLogin.tUsuario.value;
	var senhaa = formLogin.tSenha.value;
	if(document.getElementById("opt").selectedIndex == ""){
			   alert("Tipo de Usúario Incorreto.");
			   document.getElementById("opt").focus();
		   return false;
	}
	if(usuario != "Redva"){
			   alert("Usuário Incorreto.");
			   formLogin.usuario.focus();
		   return false;
	}
	if(senhaa != "ramiro.s"){
			   alert("Senha Incorreta");
			   formLogin.senhaa.focus();
		   return false;
	}
}