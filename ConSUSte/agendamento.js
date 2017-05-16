function validarAgend(){
	var dt = formAgend.data.value;
	var rg2 = formAgend.identidade.value;
	var cds = formAgend.cartao.value;
           if(document.getElementById("especialista").selectedIndex == ""){
			   alert("Selecione um Médico");
			   document.getElementById("especialista").focus();
		   return false;
		   }
           if(document.getElementById("estado").selectedIndex == ""){
			   alert("Selecione um Estado");
			   document.getElementById("estado").focus();
		   return false;
		   }		   
		   if(document.getElementById("cidade").selectedIndex == ""){
			   alert("Selecione uma Cidade");
			   document.getElementById("cidade").focus();
		   return false;
		   }
		   if(document.getElementById("hospital").selectedIndex == ""){
			   alert("Selecione um Hospital");
			   document.getElementById("hospital").focus();
		   return false;
		   }
		   if(document.getElementById("horario").selectedIndex == ""){
			   alert("Selecione um Horário");
			   document.getElementById("horario").focus();
		   return false;
		   }
		   if(dt == ""){
			   alert("Selecione uma Data");
			   formAgend.dt.focus();
		   return false;
		   }
		   if(rg2 == ""){
			   alert("O campo Identidade não foi preenchido.");
			   formAgend.rg2.focus();
		   return false;
		   }
		   if(cds == ""){
			   alert("Selecione Cartão do SUS não foi preenchido.");
			   formAgend.cds.focus();
		   return false;
		   }
		   if(document.formAgend.priori[0].checked == false && document.formAgend.priori[1].checked == false){
			   alert("Selecione uma prioridade.");
		   return false;
		   }
		   if(document.formAgend.priori[0].checked == true && document.getElementById("qualPri").value == ""){
				 alert("Informe sua prioridade.");
		   return false;
		   }
  alert ("Agendamento concluído com sucessso");
}