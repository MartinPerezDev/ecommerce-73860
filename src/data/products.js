const products = [
  {
    id: 1,
    name: "Teclado mecánico K65 PLUS",
    description: "Destaque entre la multitud con una habilidad superior y un diseño distintivo. El CORSAIR K65 PLUS WIRELESS es un teclado para juegos 75 % que maximiza el rendimiento y la personalidad.",
    price: 320,
    stock: 5,
    image: "/img/k65_plus.avif",
    category: "teclados"
  },
  {
    id: 2,
    name: "Teclado mecánico K65 RGB MINI",
    description: "El teclado mecánico para juegos CORSAIR K65 RGB MINI 60% combina rendimiento de alto nivel con portabilidad, incluye la tecnología de hiperprocesamiento AXON, interruptores de teclas mecánicos CHERRY MX SPEED y una capacidad de personalización excepcional en un diseño compacto.",
    price: 300,
    stock: 10,
    image: "/img/k65_mini.avif",
    category: "teclados"
  },
  {
    id: 3,
    name: "Mouse M75 WIRELESS",
    description: "Esculpido para la victoria. Diseñado para ser el centro de atención. El M75 WIRELESS tiene un formato de ratón ambidiestro diseñado por expertos y una conectividad ultrarrápida a través de SLIPSTREAM WIRELESS y Bluetooth®.",
    price: 250,
    stock: 2,
    image: "/img/m75.avif",
    category: "mouse"
  },
  {
    id: 4,
    name: "Mouse HARPOON RGB WIRELESS",
    description: "El ratón para juegos CORSAIR HARPOON RGB WIRELESS le permite elegir cómo jugar, con la capacidad de conectarse fácilmente al PC a través de una tecnología ultrarrápida, la TECNOLOGÍA SLIPSTREAM CORSAIR WIRELESS en menos de 1 ms, Bluetooth o conexión por cable USB.",
    price: 500,
    stock: 7,
    image: "/img/harpoon.avif",
    category: "mouse"
  },
  {
    id: 5,
    name: "Auriculares VIRTUOSO PRO",
    description: "Prepare el escenario para sus mejores momentos de streaming y juegos. VIRTUOSO PRO produce un audio realista, con transductores de grafeno de última generación y un diseño de auricular con parte posterior abierta.",
    price: 400,
    stock: 1,
    image: "/img/virtuoso_pro.avif",
    category: "auriculares"
  },
  {
    id: 6,
    name: "Auriculares XT Slate",
    description: "Los CORSAIR VIRTUOSO RGB Wireless XT ofrecen una experiencia de sonido de alta fidelidad y una comodidad continua gracias a las orejeras de espuma viscoelástica premium y una conectividad simultánea con la rapidísima tecnología SLIPSTREAM WIRELESS y Bluetooth.",
    price: 450,
    stock: 19,
    image: "/img/virtuoso_xt_01.avif",
    category: "auriculares"
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