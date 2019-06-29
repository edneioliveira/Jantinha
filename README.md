# Jantinha
projeto para estudo


cidade

 - id_cidade
 - nome_cidade
 - uf_cidade

 bairro

 - id_bairro
 - nome_bairro
 - id_cidade

 logradouro

- id_logradouro
- nome_logradouro
- id_bairro
- id_cidade


cliente

  - id_cliente
  - nome_cliente
  - cpf
  - cnpj
  - id_cidade
  - id_bairro
  - id_logradouro
  - telefone


produto
  - id_produto
  - nome produto
  - unidade
  - id_tipo_produto(categorias)
  - status


Tipo produto
  - id_tipo_produto
  - categoria
