const products = [
    {
        id: 1,
        name: "Bugambilia",
        price: 6990,
        image: "https://media.admagazine.com/photos/61f0e1a0089751617cd2fe3e/1:1/w_1919,h_1919,c_limit/bugambilia.jpg",
        description: "La bumgambilia es una planta caduda, que debe estar a pleno sol o semisombra, requiere riego medio y" +
            " tienen un formato más arbustivo. Florece en primavera y puede extenderse hasta el otoño.",
        stock: 9,
    },
    {
        id: 2,
        name: "Filodendro Paraguayo",
        price: 7990,
        image: "https://media.admagazine.com/photos/61f0e1a0089751617cd2fe3e/1:1/w_1919,h_1919,c_limit/bugambilia.jpg",
        description: "Es una planta de interior popular por su follaje exuberante y verde brillante. Originaria de América del Sur, esta planta tropical es apreciada por su fácil cuidado y capacidad para purificar el aire.",
        stock: 5,
    },
    {
        id: 3,
        name: "Monstera Deliciosa",
        price: 9990,
        image: "https://media.admagazine.com/photos/61f0e1a0089751617cd2fe3e/1:1/w_1919,h_1919,c_limit/bugambilia.jpg",
        description: "También llamada Costilla de Adán, es una planta tropical conocida por sus grandes hojas perforadas y su fácil cuidado. Es una opción popular para decorar interiores gracias a su exuberante follaje",
        stock: 7,
    },
    {
        id: 4,
        name: "Aglaonema",
        price: 3990,
        image: "https://www.kenaz.cl/cdn/shop/products/aglaonema-anymane-244106.jpg",
        description: "conocida como la planta de la suerte, es una planta de interior de bajo mantenimiento, perfecta para agregar elegancia a cualquier espacio. Sus hojas vibrantes y variadas son una delicia visual.",
        stock: 3,
    },
    {
        id: 5,
        name: "Cala",
        price: 4990,
        image: "https://media.admagazine.com/photos/61f0e1a0089751617cd2fe3e/1:1/w_1919,h_1919,c_limit/bugambilia.jpg",
        description: "La Cala burdeo es una variante vibrante y llamativa, añade un toque de elegancia y color a cualquier" +
            " espacio. Perfecta para interiores iluminados y protegidos del sol directo. ¡Embellece tu hogar con su belleza única!",
        stock: 12,
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};