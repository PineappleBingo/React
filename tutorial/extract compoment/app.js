// Extract Components

function ProductInfo(props){
    return(
        <ol className ="productInfo">
            <list className="product-model">{props.model}</list>
            <list className="product-maker">{props.maker}</list>
            <list className="product-year">{props.year}</list>
            <list className="product-wheel">{props.wheel}</list>
            <list className="product-engine">
                < EngineSpec 
                    model={props.EngineSpec}
                />
            </list>
        </ol>
    );
}

function EngineSpec(props){
    return(
        <ul className="engine-spec">
            <list className="engine-model">{props.model.model}</list> 
            <list className="engine-cylinder">{props.model.cylinder}</list>
            <list className="engine-horsepower">{props.model.horsepower}</list>
            <list className="engine-mode">{props.model.mode}</list>
        </ul>
    );
}

// product object
const product = {
    model: "HR-V",
    maker: "honda",
    year: "2022",
    wheel: "4",
    engine:
    {
        model: "TurboX2",
        cylinder: 4,
        horsepower: 150,
        mode: "FWD",
    }
}

// root render element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    < product
        model = {product.model} 
        maker = {product.maker}
        year = {product.year}
        wheel = {product.wheel}
        engine = {product.engine}
    />
);   