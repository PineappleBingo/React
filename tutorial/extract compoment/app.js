// Extract Components


// product object
const product = {
    maker: "honda",
    year: "2022",
    wheel: "4",
    engine:
    {
        cylinder: 4,
        horsepower: 150,
        mode: "FWD",
    }
}

// root render element
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    < Product 
        maker = {product.maker}
        year = {proudct.year}
        wheel = {product.wheel}
        engine = {product.engine}
    />
);   