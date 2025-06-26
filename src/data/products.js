const products = [
  {
    id: 1,
    nombre: "Teclado",
    descripcion: "Teclado 60%",
    stock: 5,
    imagen: ""
  },
  {
    id: 2,
    nombre: "Mouse",
    descripcion: "Mouse Rojo",
    stock: 10,
    imagen: ""
  },
  {
    id: 3,
    nombre: "Auriculares",
    descripcion: "Auriculares Negros",
    stock: 16,
    imagen: ""
  }
];

const getProducts = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(products);
    }, 3000);

  });
};

export default getProducts;