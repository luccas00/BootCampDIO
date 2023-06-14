Smt_Alunos = {

    OnChangeCPF: function(executionContext)
    {
        let formContext = executionContext.getFormContext();
        let cpfField = "smt_cpf";
        let idErro = "error";
        let tempoNotificacao = 10000;

        if (formContext.getAttribute(cpfField).getValue() > 0 || formContext.getAttribute(cpfField).getValue() != null)
        {
            var cpf = formContext.getAttribute(cpfField).getValue();

            // regex de validação: busca apenas por uma sequência numérica
            function apenasNumeros(str) {
                return /^\d+$/.test(str);
            }

            // se o valor não conter 11 dígitos ou conter algo que não seja número
            if(cpf.length != 11 || apenasNumeros(cpf) != true)
            {
                formContext.getAttribute(cpfField).setValue("");
                formContext.ui.setFormNotification("CPF inválido. Por favor, digite uma sequência de 11 números.", "ERROR", idErro);

                // faz a notificação de erro desaparecer
                setTimeout(
                    function () {      
                        formContext.ui.clearFormNotification(idErro);
                    },
                    tempoNotificacao
                );
            }
            else
            {
                cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
                formContext.getAttribute(cpfField).setValue(cpf);
            }
        }
        else
        {
            return;
        }
    }


}