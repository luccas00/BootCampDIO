Smt_CursosDisponiveis = {

    TipoDoCurso: function(executionContext)
    {
        let formContext = executionContext.getFormContext();

        if(formContext.getAttribute("smt_tipodocurso") == null)
        {
            return;
        }

        if(formContext.getAttribute("smt_tipodocurso").getValue() == 180580000) //Gratuito
        {
            formContext.getControl("smt_valordocurso").setVisible(false);
            formContext.getAttribute("smt_valordocurso").setRequiredLevel("none");

        } else if (formContext.getAttribute("smt_tipodocurso").getValue() == 180580001) {

            formContext.getControl("smt_valordocurso").setVisible(true);
            formContext.getAttribute("smt_valordocurso").setRequiredLevel("required");
        }
    },

    ValorMinimo: function(executionContext)
    {
        let formContext = executionContext.getFormContext();
        let smt_valor = formContext.getAttribute("smt_valordocurso").getValue();
        let idErro = "error";
        let tempoNotificacao = 10000;

        if(formContext.getAttribute("smt_valordocurso") == null)
        {
            return;
        }

        if(smt_valor < 100)
        {
            formContext.getAttribute("smt_valordocurso").setValue(null);
            formContext.ui.setFormNotification("Valor do curso não pode ser menor que R$100,00", "ERROR", idErro);
            
            setTimeout(
                function () {      
                    formContext.ui.clearFormNotification(idErro);
                },
                tempoNotificacao
            );
        }
    }
}