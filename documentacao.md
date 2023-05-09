# Documentação API Eucatex

## EndPoints

### Posts

 - GET url/posts

Retorna como resposta uma lista com todos os posts cadastrados. Exemplo:

```
[
  {
    "_id": "idTeste",
    "title": "Teste",
    "description": "Teste",
    "createdAt": "2023-04-24T18:05:42.245Z",
    "updatedAt": "2023-04-24T18:05:42.245Z"
  }
]
```

- GET url/posts/idTeste

Retorna como resposta um objeto post de acordo com o id que foi informado no endereço. Exemplo:

```
{
  "_id": "idTeste",
  "title": "Teste",
  "description": "Teste",
  "createdAt": "2023-04-24T18:05:42.245Z",
  "updatedAt": "2023-04-24T18:05:42.245Z"
}
```

 - POST url/posts

Faz o cadastro de um novo post, devemos enviar o objeto no corpo da requisição. Exemplo:

```
{
  "_id": "idTeste1",
  "title": "Teste1",
  "description": "Teste1",
}
``` 
 
Em resposta receberemos a seguinte mensagem:

```
{
  "message": "New Post Created"
}
 ```

 - PUT url/posts/idTeste1

Faz atualização de um Post já cadastrado por meio do id informado no endereço, devemos enviar o objeto com as alterações no corpo da requisição. Exemplo:

```
{
  "description": "Alterando descrição",
}
``` 

Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Post id \"idTeste1\" Updated"
}
```

 - DELETE url/posts/idTeste1

Apaga o post de acordo com o id informado no endereço. Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Post id \"idTeste1\" deleted"
}
```

### Materials

 - GET url/materials

Retorna como resposta uma lista com todos os materials cadastrados. Exemplo:

```
[
  {
    "item_id": 1,
    "material": "Teste1",
    "descricao": "Teste1",
    "unidade": "Teste1",
    "empresa": "Teste1",
    "centro": "Teste1",
    "deposito": "Teste1",
    "lote": "Teste1",
    "saldo": "Teste1",
    "saldo_projeto": "Teste1",
    "projeto": "Teste1",
    "precomm": "Teste1",
    "precolastpo": "Teste1",
    "setor_atividade": "Teste1",
    "decriacao_sa": "Teste1",
    "grupo_merc": "Teste1",
    "descricao_gm": "Teste1",
    "tuc": "Teste1",
    "descricao_tuc": "Teste1",
    "a1": "Teste1",
    "descricao_a1": "Teste1",
    "a2": "Teste1",
    "descricao_a2": "Teste1",
    "a3": "Teste1",
    "descricao_a3": "Teste1",
    "a4": "Teste1",
    "descricao_a4": "Teste1",
    "a5": "Teste1",
    "descricao_a5": "Teste1",
    "a6": "Teste1",
    "descricao_a6": "Teste1"
  }
]
```

- GET url/materials/1

Retorna como resposta um objeto materials de acordo com o item_id que foi informado no endereço. Exemplo:

```
{
  "item_id": 1,
  "material": "Teste1",
  "descricao": "Teste1",
  "unidade": "Teste1",
  "empresa": "Teste1",
  "centro": "Teste1",
  "deposito": "Teste1",
  "lote": "Teste1",
  "saldo": "Teste1",
  "saldo_projeto": "Teste1",
  "projeto": "Teste1",
  "precomm": "Teste1",
  "precolastpo": "Teste1",
  "setor_atividade": "Teste1",
  "decriacao_sa": "Teste1",
  "grupo_merc": "Teste1",
  "descricao_gm": "Teste1",
  "tuc": "Teste1",
  "descricao_tuc": "Teste1",
  "a1": "Teste1",
  "descricao_a1": "Teste1",
  "a2": "Teste1",
  "descricao_a2": "Teste1",
  "a3": "Teste1",
  "descricao_a3": "Teste1",
  "a4": "Teste1",
  "descricao_a4": "Teste1",
  "a5": "Teste1",
  "descricao_a5": "Teste1",
  "a6": "Teste1",
  "descricao_a6": "Teste1"
}
```

 - POST url/materials

Faz o cadastro de um novo post, devemos enviar o objeto no corpo da requisição. Exemplo:

```
{
  "item_id": 2,
  "material": "Teste2",
  "descricao": "Teste2",
  "unidade": "Teste2",
  "empresa": "Teste2",
  "centro": "Teste2",
  "deposito": "Teste2",
  "lote": "Teste2",
  "saldo": "Teste2",
  "saldo_projeto": "Teste2",
  "projeto": "Teste2",
  "precomm": "Teste2",
  "precolastpo": "Teste2",
  "setor_atividade": "Teste2",
  "decriacao_sa": "Teste2",
  "grupo_merc": "Teste2",
  "descricao_gm": "Teste2",
  "tuc": "Teste2",
  "descricao_tuc": "Teste2",
  "a1": "Teste2",
  "descricao_a1": "Teste2",
  "a2": "Teste2",
  "descricao_a2": "Teste2",
  "a3": "Teste2",
  "descricao_a3": "Teste2",
  "a4": "Teste2",
  "descricao_a4": "Teste2",
  "a5": "Teste2",
  "descricao_a5": "Teste2",
  "a6": "Teste2",
  "descricao_a6": "Teste2"
}
``` 
 
Em resposta receberemos a seguinte mensagem:

```
{
    "message": "New Material Created"
}
 ```

 - PUT url/materials/2

Faz atualização de um Material já cadastrado por meio do item_id informado no endereço, devemos enviar o objeto com as alterações no corpo da requisição. Exemplo:

```
{
  "descricao": "Alterando descrição",
}
``` 

Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Material item_id \"2\" Updated"
}
```

 - DELETE url/materials/2

Apaga o post de acordo com o item_id informado no endereço. Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Material item_id \"2\" deleted"
}
```

### Textos

 - GET url/textos

Retorna como resposta uma lista com todos os textos cadastrados. Exemplo:

```
[
  {
      "material": "teste",
      "descricao_longa": "teste"
  }
]
```

- GET url/textos/teste

Retorna como resposta um objeto post de acordo com o material que foi informado no endereço. Exemplo:

```
{
  "material": "teste",
  "descricao_longa": "teste"
}
```

 - POST url/textos

Faz o cadastro de um novo texto, devemos enviar o objeto no corpo da requisição. Exemplo:

```
{
  "material": "teste1",
  "descricao_longa": "teste1"
}
``` 
 
Em resposta receberemos a seguinte mensagem:

```
{
  "message": "New Texto Created"
}
 ```

 - PUT url/textos/teste1

Faz atualização de um Texto já cadastrado por meio do material informado no endereço, devemos enviar o objeto com as alterações no corpo da requisição. Exemplo:

```
{
  "descricao_longa": "alterando"
}
``` 

Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Texto material \"teste1\" Updated"
}
```

 - DELETE url/textos/teste1

Apaga o texto de acordo com o material informado no endereço. Em resposta receberemos a seguinte mensagem:

```
{
  "message": "texto material \"teste1\" deleted"
}
```

### Itens

 - GET url/itens

Retorna como resposta uma lista com todos os itens cadastrados. Exemplo:

```
[
	{
		"estab": "teste1",
		"it-codigo": 1,
		"desc-item": "Teste1",
		"tp-contr-estoque": true,
		"fm-codigo": "Teste1",
		"descricao": "Teste1",
		"desc-ge": "Teste1",
		"ge-codigo": 2,
		"narrativa": "Teste1",
		"situacao": 3,
		"preco-base": 3.1,
		"preco-ul-ent": 4,
		"val-unit-mat": 4.1,
		"preco-medio": 4.1,
		"ind-processado": 5,
		"ind-alter": 6
	}
]
```

- GET url/itens/teste1

Retorna como resposta um objeto item de acordo com o estab que foi informado no endereço. Exemplo:

```
{
	"estab": "teste1",
	"it-codigo": 1,
	"desc-item": "Teste1",
	"tp-contr-estoque": true,
	"fm-codigo": "Teste1",
	"descricao": "Teste1",
	"desc-ge": "Teste1",
	"ge-codigo": 2,
	"narrativa": "Teste1",
	"situacao": 3,
	"preco-base": 3.1,
	"preco-ul-ent": 4,
	"val-unit-mat": 4.1,
	"preco-medio": 4.1,
	"ind-processado": 5,
	"ind-alter": 6
}
```

 - POST url/itens

Faz o cadastro de um novo item, devemos enviar o objeto no corpo da requisição. Exemplo:

```
{
	{
		"estab": "teste2",
		"it-codigo": 2,
		"desc-item": "Teste2",
		"tp-contr-estoque": true,
		"fm-codigo": "Teste2",
		"descricao": "Teste2",
		"desc-ge": "Teste2",
		"ge-codigo": 2,
		"narrativa": "Teste2",
		"situacao": 3,
		"preco-base": 3.1,
		"preco-ul-ent": 4,
		"val-unit-mat": 4.1,
		"preco-medio": 4.1,
		"ind-processado": 5,
		"ind-alter": 6
	}
}
``` 
 
Em resposta receberemos a seguinte mensagem:

```
{
  "message": "New Item Created"
}
 ```

 - PUT url/itens/teste2

Faz atualização de um Item já cadastrado por meio do estab informado no endereço, devemos enviar o objeto com as alterações no corpo da requisição. Exemplo:

```
{
	"desc-item": "alterando",
}
``` 

Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Item estab \"teste1\" Updated"
}
```

 - DELETE url/itens/teste2

Apaga o texto de acordo com o material informado no endereço. Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Item estab \"teste2\" deleted"
}
```

### Estoq

 - GET url/estoq

Retorna como resposta uma lista com todos os estoq cadastrados. Exemplo:

```
[
	{
        "cod-estabel": "teste1",
        "it-codigo": "1",
        "cod-depos": "teste1",
        "cod-localiz": "teste1",
        "cod-refer": "teste1",
        "lote": "teste1",
        "quantidade-atu": 1.1,
        "ind-processado": 2,
        "ind-alter": 3
	}
]
```

- GET url/estoq/1

Retorna como resposta um objeto estoq de acordo com o it-codigo que foi informado no endereço. Exemplo:

```
{
	"cod-estabel": "teste1",
	"it-codigo": "1",
	"cod-depos": "teste1",
	"cod-localiz": "teste1",
	"cod-refer": "teste1",
	"lote": "teste1",
	"quantidade-atu": 1.1,
	"ind-processado": 2,
	"ind-alter": 3
}

```

 - POST url/estoq

Faz o cadastro de um novo item, devemos enviar o objeto no corpo da requisição. Exemplo:

```
{
	"cod-estabel": "teste2",
	"it-codigo": "2",
	"cod-depos": "teste2",
	"cod-localiz": "teste2",
	"cod-refer": "teste2",
	"lote": "teste1",
	"quantidade-atu": 1.1,
	"ind-processado": 2,
	"ind-alter": 3
}
``` 
 
Em resposta receberemos a seguinte mensagem:

```
{
  "message": "New Estoq Created"
}
 ```

 - PUT url/estoq/2

Faz atualização de um Estoq já cadastrado por meio do it-codigo informado no endereço, devemos enviar o objeto com as alterações no corpo da requisição. Exemplo:

```
{
	"lote": "alterando"
}
``` 

Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Estoq it-codigo \"2\" Updated"
}
```

 - DELETE url/estoq/2

Apaga o Estoq de acordo com o it-codigo informado no endereço. Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Estoq it-codigo \"2\" deleted"
}
```

### Retorno

 - GET url/retorno

Retorna como resposta uma lista com todos os Retornos cadastrados. Exemplo:

```
[
	{
        "id_lote": "1",
        "cod_ret": "Teste1",
        "mensagem": "Teste1"
    }
]
```

- GET url/retorno/1

Retorna como resposta um objeto Retorno de acordo com o id_lote que foi informado no endereço. Exemplo:

```
{
	"id_lote": "1",
	"cod_ret": "Teste1",
	"mensagem": "Teste1"
}

```

 - POST url/retorno

Faz o cadastro de um novo Retorno, devemos enviar o objeto no corpo da requisição. Exemplo:

```
{
	"id_lote": "2",
	"cod_ret": "Teste2",
	"mensagem": "Teste2"
}
``` 
 
Em resposta receberemos a seguinte mensagem:

```
{
  "message": "New Retorno Created"
}
 ```

 - PUT url/retorno/2

Faz atualização de um Retorno já cadastrado por meio do id_lote informado no endereço, devemos enviar o objeto com as alterações no corpo da requisição. Exemplo:

```
{
    "mensagem": "Alterando"
}
``` 

Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Retorno id_lote \"2\" Updated"
}
```

 - DELETE url/retorno/2

Apaga o Retorno de acordo com o id_lote informado no endereço. Em resposta receberemos a seguinte mensagem:

```
{
  "message": "Retorno id_lote \"2\" deleted"
}
```

## Modelos

 - Posts
 ```
 {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
	updatedAt: Date;
}
 ```

 - Materials
```
 {
    item_id: number;
    material: string;
    descricao: string;
    unidade: string;
    empresa: string;
    centro: string;
    deposito: string;
    lote: string;
    saldo: string;
    saldo_projeto: string;
    projeto: string;
    precomm: string;
    precolastpo: string;
    setor_atividade: string;
    decriacao_sa: string;
    grupo_merc: string;
    descricao_gm: string;
    tuc: string;
    descricao_tuc: string;
    a1: string;
    descricao_a1: string;
    a2: string;
    descricao_a2: string;
    a3: string;
    descricao_a3: string;
    a4: string;
    descricao_a4: string;
    a5: string;
    descricao_a5: string;
    a6: string;
    descricao_a6: string;
}
```

 - Textos
 ```
{
    material: string;
    descricao_longa: string;
}
 ```

 - Itens
 ```
 {
    "estab": string,
    "it-codigo": number,
    "desc-item": string,
    "tp-contr-estoque": boolean,
    "fm-codigo": string,
    "descricao": string,
    "desc-ge": string,
    "ge-codigo": number,
    "narrativa": string,
    "situacao": number,
    "preco-base": float,
    "preco-ul-ent": number,
    "val-unit-mat": float,
    "preco-medio": float,
    "ind-processado": number,
    "ind-alter": number
}
 ```

 - Estoq
 ```
 {
	"cod-estabel": string;
	"it-codigo": string;
	"cod-depos": string;
	"cod-localiz": string;
	"cod-refer": string;
	lote: string;
	"quantidade-atu": float;
	"ind-processado": number;
	"ind-alter": number;
 }
 ```

 - Retorno
 ```
{
    id_lote: string;
    cod_ret: string;
    mensagem: string;
}
 ```




