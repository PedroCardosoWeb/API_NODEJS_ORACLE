# API_NodeJs_Oracle
Uma API para comunicação da transportadora com o cliente, informando o status de cada entrega. Cada arquivo enviado pela transportadora contém os dados das entregas e respectivo status atual, sendo atualizado/enviado várias vezes ao dia. O arquivo de texto enviado no formato EDI-PROCEDA é lido por esta API, processado e gravado na base de dados ORACLE da aplicação do cliente(ERP: SAGE3).  
Seu funcionamento consiste na leitura de um arquivo (.txt) recebido via FTP (no padrão EDI-PROCEDA) da transportadora; no processamento do seu conteúdo, convertendo as strings em atributos de um objeto 'Entrega'; e na gravação dos mesmos na base de dados do ERP (SAGE3-OracleDB). 
Foi utilizado o padrão REST para o desenvolvimento da API, bem como os conceitos de MVC.
#API_Transportadoras(EDI_PROCEDA)_BV(OracleDB_SAGE3)

