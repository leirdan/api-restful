# API, REST E RESTFUL

## 1. API

Um conjunto de padrões criados por uma aplicação para que outras aplicações possam usá-la.

-   Funciona como um Controller (analogia), já que estabelece a comunicação entre client (view) e servidor (model)
-   É um intermediador na hora da troca de informações.

## 2. REST

Espécie de pré-requisitos para que, numa transferência de dados, tudo ocorra perfeitamente. A transferência
ocorre de maneira "representativa", figurativa, e é geralmente usando o protocolo HTTP.
Existem seis obrigações (constraints) no total.

### 2.1 AS SEIS CONSTRAINS:

-   _Client-Server_: **O cliente e servidor devem estar separados**. Isso significa dizer que a parte front e back-end estão divididas e os dados estão guardados no servidor, não na interface.
-   _Stateless_: **Cada requisição HTTP deve enviar todos os dados completos ao servidor para o cliente ser respondido corretamente**. Ou seja, a Request deve conter todas as informações necessárias para gerar uma Response adequada. Um exemplo prático disso é não armazenar dados de usuário no servidor, pois isso geraria um estado; a maneira "correta" de se fazer isso seria o usuário logar e iniciar uma nova sessão toda vez que for acessar a API.
-   _Cacheable_: **Todas as Responses devem informar se suas informações serão ou não cacheáveis**.
-   _Layered System_: **O cliente acessa um endpoint sem precisar saber do caminho percorrido e da sua complexidade**; um endpoint nada mais é que um endereço final da API.
-   _Uniform Interface_: **Padronizar o formato das suas informações**.
-   _Code on Demand (opcional)_: **Possibilidade da API mandar códigos para o cliente e executá-los lá, como código Javascript**.

## 3. RESTFUL

Nada mais do que uma aplicação que segue os padrões REST.

## 4. BOAS PRÁTICAS

-   Utilizar verbos HTTP (get, post, put, delete, ...) para as requisições.
-   Nunca deixar o cliente sem respostas; use os status das respostas HTTP também (status 404, 200, ...).
