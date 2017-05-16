function validarCad(){
    var nm = cadForm.tNome.value;
	var rg = cadForm.tRg.value;
	var ende = cadForm.tEndereco.value;
	var usu = cadForm.tUsuario.value;
	var senha = cadForm.tSenha.value;
     if (nm == ""){
        alert("Campo Nome Completo* é obrigatório");
		cadForm.nm.focus();
        return false;
    }
	  if (rg == ""){
        alert("Campo Identidade* é obrigatório");
		cadForm.rg.focus();
        return false;
    }
	  if (ende == ""){
        alert("Campo Endeço* é obrigatório");
		cadForm.ende.focus();
        return false;
    }
	if(document.getElementById("genero").selectedIndex == ""){
			   alert("Selecione um Gênero");
			   document.getElementById("genero").focus();
		   return false;
		   }
	  if (usu == ""){
        alert("Campo Nome de Usuário* é obrigatório");
		cadForm.usu.focus();
        return false;
    }
	  if (senha == ""){
        alert("Campo Senha* é obrigatório");
		cadForm.senha.focus();
        return false;
	}
     alert("Cadastro finalizado com sucesso!");
}