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
