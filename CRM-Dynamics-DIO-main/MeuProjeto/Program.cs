using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeuProjeto
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = new Conexao().ObterConexao();
            FetchXML(service);
            //CreateAluno(service);
            Guid updatetarget = new Guid("5f9026ab-9ff3-ed11-8848-6045bd39f3c4");
            UpdateAluno(service, updatetarget);
            Guid deletetarget = new Guid("b45c855b-a0f3-ed11-8848-6045bd39f3c4");
            DeleteEntity(service, deletetarget);

        }

        static void FetchXML(CrmServiceClient crmService)
        {
            string query = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                              <entity name='smt_aluno'>
                                <attribute name='smt_nome' />
                                <attribute name='smt_email' />
                                <attribute name='smt_cpf' />
                                <attribute name='smt_alunoid' />
                                <order attribute='smt_nome' descending='false' />
                              </entity>
                            </fetch>";

            EntityCollection colecao = crmService.RetrieveMultiple(new FetchExpression(query));
            foreach (var item in colecao.Entities)
            {
                Console.WriteLine(item["smt_nome"]);
                Console.WriteLine(item["smt_email"]);
            }
            Console.ReadLine();
        }

        static Guid CreateAluno(CrmServiceClient crmService)
        {
           
            Guid newRecord = new Guid();
            Entity newAluno = new Entity("smt_aluno");
            newAluno.Attributes.Add("smt_nome", "Treinamento " + DateTime.Now.ToString());
            newAluno.Attributes.Add("smt_cpf", "12312312300");
            newAluno.Attributes.Add("smt_email", "contato@teste.com");

            newRecord = crmService.Create(newAluno);

            if (newRecord != Guid.Empty)
                Console.WriteLine("Id do Registro criado : " + newRecord);
            else
                Console.WriteLine("newRecord não criado!");
            
            Console.ReadLine();

            return newRecord;
        }

        static void UpdateAluno(CrmServiceClient crmService, Guid guidAluno)
        {
            Entity upEntity = new Entity("smt_aluno", guidAluno);
            upEntity["smt_nome"] = "Saruman";
            upEntity["smt_cpf"] = "00011100077";
            upEntity["smt_email"] = "saruman@istari.com";
            crmService.Update(upEntity);
            Console.WriteLine("Update finalizado!");
            Console.ReadKey();
        }

        static void DeleteEntity(CrmServiceClient crmService, Guid guidAluno)
        {
            Entity entityDelete = crmService.Retrieve("smt_aluno", guidAluno, new ColumnSet("smt_nome"));

            Console.WriteLine("==================================================================================");
            Console.WriteLine("Confirma a exclusão da conta: " + entityDelete["smt_nome"] + " ? (SIM/NAO)");
            var confirm = Console.ReadLine();

            if (confirm == "SIM" || confirm == "sim")
            {
                if (entityDelete.Attributes.Count > 0)
                {
                    crmService.Delete("smt_aluno", guidAluno);
                    Console.WriteLine("Aluno excluído!");
                    Console.WriteLine("==================================================================================");
                    Console.WriteLine("pressione qualquer tecla para continuar...");
                    Console.ReadKey();
                }
            }
        }

    }
}
