# Api Tienda

## Base Url

http://localhost:3000

## Endpoint

### GET /ping

Verifica que la API esta funcionando

### Response 200

```json
{
  "message": "pong"
}
```

### Get /products

Devuelve la lista de productos

### Response 200

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 1200
  },
  {...}
]
```

### Get /products/:id

Devuelve un producto por id

### Response 200

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 1200
  }
]
```

### Response 404

```json
[
  {
    "error": "Product Not Found"
  }
]
```

### Get /categories

Devuelve la lista de categorias

### Response 200

```json
[
  {
    "id": 1,
    "name": "Electro",
    "descripcion": "Lorem ipsum"
  },
  {...}
]
```

### Get /categories/:id

Devuelve una categoria por id

### Response 200

```json
[
  {
    "id": 1,
    "name": "Electro",
    "descripcion": "Lorem ipsum"
  }
]
```

### Response 404

```json
[
  {
    "error": "Category Not Found"
  }
]
```
