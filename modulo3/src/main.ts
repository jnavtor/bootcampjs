interface GrupoMusical {
    nombredelgrupo: string;
    año: number;
    activo: boolean;
    genero: string;
}
const estilos = "background-color: green; font-weigth: bold";

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

console.log (`%c ${grupo1.nombredelgrupo}`, estilos) 
console.log (grupo1)
console.log (`%c ${grupo2.nombredelgrupo}`, estilos) 
console.log (grupo2)
console.log (`%c ${grupo3.nombredelgrupo}`, estilos) 
console.log (grupo3)
console.log (`%c ${grupo4.nombredelgrupo}`, estilos) 
console.log (grupo4)
console.log (`%c ${grupo5.nombredelgrupo}`, estilos) 
console.log (grupo5)

