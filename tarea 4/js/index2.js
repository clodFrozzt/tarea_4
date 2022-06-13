const funcion2 = (a) => {
    if (a < 500)
        return; // Condicion de salida
    console.log(a);
    funcion2(a - 2);
};
funcion2(1000)