using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk;
using Microsoft.Xrm.Tooling.Connector;

namespace MeuProjeto
{
    internal class Conexao
    {
        private static CrmServiceClient crmServiceClientLuccas;

        public CrmServiceClient ObterConexao()
        {
            var connectionStringCRM = @"AuthType=OAuth;
            Username = admin@luccascarneirohotmailcom.onmicrosoft.com;
            Password = Elessar@3434; SkipDiscovery = true;
            AppId = 51f81489-12ee-4a9e-aaae-a2591f45987d;
            RedirectUri = app://58145B91-0C36-4500-8554-080854F2AC97;
            Url = https://org915cff13.crm2.dynamics.com/main.aspx;";
            
            if(crmServiceClientLuccas == null)
            {
                System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                crmServiceClientLuccas = new CrmServiceClient(connectionStringCRM);

            }

            return crmServiceClientLuccas;

        }
    }
}
