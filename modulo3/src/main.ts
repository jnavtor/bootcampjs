interface GrupoMusical {
    nombredelgrupo: string;
    año: number;
    activo: boolean;
    genero: string;
}

const grupo1: GrupoMusical= {
    nombredelgrupo: "The Beatles",
    año: 1960,
    activo: true,
    genero: " 🎵 Pop Rock",
};

const grupo2: GrupoMusical= {
    nombredelgrupo: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock",
};

const grupo3: GrupoMusical= {
    nombredelgrupo: "AC DC",
    año: 1973,
    activo: true,
    genero: "🤘Hard Rock",
};

const grupo4: GrupoMusical= {
    nombredelgrupo:"Ludwig van Beethove",
    año: 1970,
    activo: false,
    genero: "🎼 Clasica",
};

const grupo5: GrupoMusical= {
    nombredelgrupo: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock",
};

console.log (grupo1)
console.log (grupo2)
console.log (grupo3)
console.log (grupo4)
console.log (grupo5)

