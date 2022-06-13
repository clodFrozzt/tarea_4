const funcion1 = (n) => {
    if (n > 100) return  // Condicion de salida
    console.log(n)
    funcion1(n + 1)
}
funcion1(1)