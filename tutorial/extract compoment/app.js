// Extract Components Example


// Extract EngineSpec from ProductInfo
function EngineSpec(props){
    return(
        <ul className="engine-spec">
            <li className="engine-model">{props.model.model}</li> 
            <li className="engine-cylinder">{props.model.cylinder}</li>
            <li className="engine-horsepower">{props.model.horsepower}</li>
            <li className="engine-mode">{props.model.mode}</li>
        </ul>
    );
}

// Extract ProductInfo
function ProductInfo(props){
    return(
        <ol className ="productInfo">
            <li className="product-model">{props.model}</li>
            <li className="product-maker">{props.maker}</li>
            <li className="product-year">{props.year}</li>
            <li className="product-wheel">{props.wheel}</li>
            <li className="product-engine">
                < EngineSpec 
                    model={props.engine}
                />
            </li>
        </ol>
    );
}

function Product(props){
    return(
        <div className="product">
            <h1>2022 {props.maker} model</h1>
            <ProductInfo
                model = {props.model}
                maker = {props.maker}
                year = {props.yaer}
                wheel = {props.wheel}
                engine = {props.engine}
            />
        </div>
    );
}

// product object data
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
    < Product
        model = {product.model} 
        maker = {product.maker}
        year = {product.year}
        wheel = {product.wheel}
        engine = {product.engine}
    />
);   