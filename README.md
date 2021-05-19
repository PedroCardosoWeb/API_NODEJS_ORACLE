# API_NodeJs_Oracle
Uma API para comunicação da transportadora com o cliente, informando o status de cada entrega. Cada arquivo enviado contém dados da entrega e o status atual, sendo atualizado várias vezes ao dia. O arquivo de texto enviado no formato EDI-PROCEDA é lido pela API, processado e gravado na base de dados ORACLE da aplicação (ERP: SAGE3).  
Consiste na leitura de um arquivo (.txt) recebido via FTP (no padrão EDI-PROCEDA), no processamento do seu conteúdo, convertendo as strings em atributos de um objeto 'Entrega', e na gravação dos mesmos na base de dados do ERP (SAGE3-OracleDB). Foi utilizado o padrão REST para o desenvolvimento da API, bem como os conceitos de MVC.
#API_Transportadoras(EDI_PROCEDA)_BV(OracleDB_SAGE3)

