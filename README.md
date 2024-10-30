# QuartoApp: Gerenciamento de Pessoas

Este projeto Angular demonstra um sistema simples para gerenciar informações de pessoas. Ele utiliza componentes para exibir, adicionar e listar pessoas, e um serviço para gerenciar os dados.

## Estrutura do Projeto

```
QuartoApp/
├── src/
│   └── app/
│       ├── pessoa.service.ts
│       ├── pessoa.ts
│       ├── tab-pessoa/
│       │   ├── tab-pessoa.component.html
│       │   ├── tab-pessoa.component.ts
│       │   └── ...
│       ├── panel-pessoa/
│       │   ├── panel-pessoa.component.html
│       │   ├── panel-pessoa.component.ts
│       │   └── ...
│       ├── list-pessoa/
│       │   ├── list-pessoa.component.html
│       │   ├── list-pessoa.component.ts
│       │   └── ...
│       ├── exemplo1/
│       │   ├── exemplo1.component.html
│       │   ├── exemplo1.component.ts
│       │   └── ...
│       └── ...
└── ...
```

## Componentes

* **`Exemplo1Component`**: Componente principal que contém o formulário para adicionar pessoas e exibe os outros componentes (`ListPessoaComponent`, `TabPessoaComponent`, `PanelPessoaComponent`).
* **`ListPessoaComponent`**: Exibe uma lista de pessoas em um elemento `<select>` múltiplo.
* **`TabPessoaComponent`**: Exibe os dados das pessoas em uma tabela.
* **`PanelPessoaComponent`**: Exibe as informações da última pessoa adicionada.

## Serviços

* **`PessoaService`**: Serviço que gerencia os dados das pessoas. Ele mantém um array de `Pessoa` e fornece métodos para adicionar, atualizar e assinar notificações sobre mudanças nos dados.


## Fluxo de Dados

1. O usuário insere os dados da pessoa no formulário do `Exemplo1Component`.
2. Ao clicar em "Incluir", o `Exemplo1Component` chama o método `adicionar()` do `PessoaService`.
3. O `PessoaService` adiciona a nova pessoa ao array `pessoas` e notifica os componentes inscritos através dos Subjects `canalPessoaAdd` (para a última pessoa adicionada) and `canalPessoaFull` (para a lista completa).
4. `ListPessoaComponent`, `TabPessoaComponent` e `PanelPessoaComponent`, que estão inscritos nesses Subjects, recebem as atualizações e re-renderizam seus templates com os novos dados.


## Implementação

### `PessoaService`

Utiliza RxJS Subjects para notificar os componentes sobre mudanças nos dados.  O Subject `canalPessoaAdd` emite a última pessoa adicionada e `canalPessoaFull` emite o array completo de pessoas.

### Componentes

Os componentes `ListPessoaComponent`, `TabPessoaComponent` e `PanelPessoaComponent` se inscrevem nos Subjects do `PessoaService` para receber atualizações dos dados.  Eles utilizam o `*ngFor` para iterar sobre o array de pessoas e exibir as informações.

## Melhorias Possiveis

* **Persistência de Dados:**  Atualmente, os dados são perdidos quando a aplicação é fechada. Implementar persistência de dados usando Local Storage, Session Storage ou um banco de dados.
* **Validação de Formulário:** Adicionar validação ao formulário para garantir que os dados inseridos sejam válidos.
* **Estilização:**  Melhorar a estilização dos componentes.
* **Funcionalidades Adicionais:** Adicionar funcionalidades como edição e exclusão de pessoas.
* **Testes Unitários:**  Implementar testes unitários para os componentes e serviços.


## Execução

Para executar o projeto, navegue até o diretório `QuartoApp` e execute o comando `ng serve`. O aplicativo estará disponível em `http://localhost:4200/`.
