const productos = [
    {"idProducto": "1", "imagen": "sofa_01.jpg", "titulo": "sofá", "color1": "Gris", "color2": "Rojo", "precio": 50000, "categoria": "living"},
    {"idProducto": "2", "imagen": "sofa_02.jpg", "titulo": "sofá", "color1": "Gris", "color2": "Maíz", "precio": 55000, "categoria": "living"},
    {"idProducto": "3", "imagen": "sofa_03.jpg", "titulo": "sofá", "color1": "Celeste", "color2": "Crema", "precio": 55000, "categoria": "living"},
    {"idProducto": "4", "imagen": "living_01.jpg", "titulo": "living", "color1": "Negro", "color2": "Menta", "precio": 150000, "categoria": "living"},
    {"idProducto": "5", "imagen": "living_02.jpg", "titulo": "living", "color1": "Blanco", "color2": "Beige", "precio": 150000, "categoria": "living"},
    {"idProducto": "6", "imagen": "living_03.jpg", "titulo": "living", "color1": "Naranja", "color2": "Beige", "precio": 200000, "categoria": "living"},
    {"idProducto": "7", "imagen": "silla_01.jpg", "titulo": "silla", "color1": "Blanca", "color2": "Verde", "precio": 8000, "categoria": "comedor"},
    {"idProducto": "8", "imagen": "silla_02.jpg", "titulo": "silla", "color1": "Negra", "color2": "Crema", "precio": 8000, "categoria": "comedor"},
    {"idProducto": "9", "imagen": "silla_03.jpg", "titulo": "silla", "color1": "Blanca", "color2": "Negra", "precio": 7500, "categoria": "comedor"},
    {"idProducto": "10", "imagen": "comedor_01.jpg", "titulo": "comedor", "color1": "Negro", "color2": "Blanco", "precio": 200000, "categoria": "comedor"},
    {"idProducto": "11", "imagen": "comedor_02.jpg", "titulo": "comedor", "color1": "Blanco", "color2": "Negro", "precio": 150000, "categoria": "comedor"},
    {"idProducto": "12", "imagen": "comedor_03.jpg", "titulo": "comedor","color1": "Negro", "color2": "Beige", "precio": 150000, "categoria": "comedor"},
    {"idProducto": "13", "imagen": "escritorio_01.jpg", "titulo": "silla","color1": "Blanca","color2": "Negra", "precio": 15000, "categoria": "oficina"},
    {"idProducto": "14", "imagen": "recepcion_01.jpg", "titulo": "sofá", "color1": "Rosa", "color2": "Beige", "precio": 25000, "categoria": "oficina"},
    {"idProducto": "15", "imagen": "escritorio_02.jpg", "titulo": "escritorio", "color1": "Blanco", "color2": "Negro", "precio": 35000, "categoria": "oficina"},
    {"idProducto": "16", "imagen": "escritorio_03.jpg", "titulo": "escritorio", "color1": "Marrón", "color2": "Negro", "precio": 25000, "categoria": "oficina"},
    {"idProducto": "17", "imagen": "estanteria_01.jpg", "titulo": "estantería", "color1": "Marrón", "color2": "Blanca", "precio": 30000, "categoria": "oficina"},
    {"idProducto": "18", "imagen": "estanteria_02.jpg", "titulo": "estantería", "color1": "Negra", "color2": "Marrón", "precio": 30000, "categoria": "oficina"},
    {"idProducto": "19", "imagen": "lampara_01.jpg", "titulo": "lámpara", "color1": "Blanca", "color2": "Negra", "precio": 15000, "categoria": "accesorio"},
    {"idProducto": "20", "imagen": "lampara_02.jpg", "titulo": "lámpara", "color1": "Negra", "color2": "Blanca", "precio": 15000, "categoria": "accesorio"},
    {"idProducto": "21", "imagen": "iluminacion_01.jpg", "titulo": "aplique", "color1": "Blanco", "color2": "Negro", "precio": 8000, "categoria": "accesorio"}
]
export const fetchProductos = (id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? productos.find(produc => produc.idProducto === id) : productos)
        }, 3000);
    })
}