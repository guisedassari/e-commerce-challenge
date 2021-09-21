import { NextApiRequest, NextApiResponse } from "next";

export default function Products(req: NextApiRequest, res: NextApiResponse) {
  const products = [
    {
      id: "1",
      DisplayName: "Maçã",
      name: "maca",
      type: "Verde",
      price: "5",
      image: "http://localhost:3000/images/api-img/maca-verde.jpg",
      stock: "10",
      description:
        "Tem coloração verde, polpa crocante e suculenta. Rica em clorofila é a mais indicada para acompanhar pratos salgados.",
    },
    {
      id: "2",
      DisplayName: "Maçã",
      name: "maca",
      type: "Argentina",
      price: "2.50",
      image: "http://localhost:3000/images/api-img/maca-argentina.jpg",
      stock: "34",
      description:
        "Possuem coloração avermelhada brilhante. Apresenta um sabor doce e de fácil digestão. Desvantagens: Polpa pouca suculenta e textura farinhenta",
    },
    {
      id: "3",
      DisplayName: "Maçã",
      name: "maca",
      type: "Gala",
      price: "3.90",
      image: "http://localhost:3000/images/api-img/maca-gala.jpg",
      stock: "65",
      description:
        "Apresenta coloração avermelhada a polpa é macia e rica em açúcares.",
    },
    {
      id: "4",
      DisplayName: "Pêra",
      name: "pera",
      type: "Willians",
      price: "4.25",
      image: "http://localhost:3000/images/api-img/pera-willians.jpg",
      stock: "8",
      description:
        "que é dura e ligeiramente ácida, sendo indicada para cozer sem se desmanchar",
    },
    {
      id: "5",
      DisplayName: "Pêra",
      name: "pera",
      type: "d'água",
      price: "1.80",
      image: "http://localhost:3000/images/api-img/pera-dagua.jpg",
      stock: "1",
      description: "possui uma polpa delicada",
    },
    {
      id: "6",
      DisplayName: "Pêra",
      name: "pera",
      type: "Red",
      price: "3.45",
      image: "http://localhost:3000/images/api-img/pera-red.jpg",
      stock: "92",
      description: "tem esse nome por ter a casca vermelha e é muito suculenta",
    },
    {
      id: "7",
      DisplayName: "Banana",
      name: "banana",
      type: "Prata",
      price: "2.85",
      image: "http://localhost:3000/images/api-img/banana-prata.jpg",
      stock: "32",
      description:
        " uma das mais consumidas no Brasil e é perfeita para quando não podemos ir muito ao supermercado, como  está acontecendo durante uma quarentena.",
    },
    {
      id: "8",
      DisplayName: "Banana",
      name: "banana",
      type: "Nanica",
      price: "0.75",
      image: "http://localhost:3000/images/api-img/banana-nanica.jpg",
      stock: "7",
      description:
        "Disparada com a banana-prata, a nanica é uma das mais populares dos tipos de banana entre os brasileiros. ",
    },
    {
      id: "9",
      DisplayName: "Banana",
      name: "banana",
      type: "Da-terra",
      price: "5.50",
      image: "http://localhost:3000/images/api-img/banana-da-terra.jpg",
      stock: "8",
      description:
        "Esta variedade chamada banana-da-terra não é tão consumida quanto os outros tipos de banana",
    },
    {
      id: "10",
      DisplayName: "Abacaxi",
      name: "abacaxi",
      type: "Perola",
      price: "8.60",
      image: "http://localhost:3000/images/api-img/abacaxi-perola.jpg",
      stock: "56",
      description:
        "pode confundir um pouco a cabeça do consumidor. O motivo é que sua casca é sempre verde, mesmo quando já está maduro.",
    },
    {
      id: "11",
      DisplayName: "Abacaxi",
      name: "abacaxi",
      type: "Havaiano",
      price: "6.30",
      image: "http://localhost:3000/images/api-img/abacaxi-havaiano.jpg",
      stock: "63",
      description:
        "é o mais indicado para receitas culinárias e bebidas alcoólicas. Por conta do sabor equilibrado, se torna uma das melhores opções para degustação.",
    },
    {
      id: "12",
      DisplayName: "Manga",
      name: "manga",
      type: "Espada",
      price: "4.30",
      image: "http://localhost:3000/images/api-img/manga-espada.jpg",
      stock: "8",
      description:
        "Essa variedade é alongada e achatada nos lados e é  considerada um dos tipos mais antigas do Brasil.",
    },
    {
      id: "13",
      DisplayName: "Manga",
      name: "manga",
      type: "Palmer",
      price: "1.75",
      image: "http://localhost:3000/images/api-img/manga-palmer.jpg",
      stock: "2",
      description:
        "Originada no ano de 1945, na Flórida, Estados Unidos, foi introduzida no Brasil na década de 60. Antes da maturação, os frutos são verde-arroxeados.",
    },
    {
      id: "14",
      DisplayName: "Manga",
      name: "manga",
      type: "Rosa",
      price: "3.80",
      image: "http://localhost:3000/images/api-img/manga-rosa.jpg",
      stock: "14",
      description:
        "Eternizada na voz de Alceu Valença, a manga rosa é muito encontrada no nordeste do País. No exterior, entretanto, já não é tão popular.",
    },
  ];
  res.status(200).json(products);
}
