function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);
    const [typeOfBooks, setTipeOfBooks] = React.useState(null);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },)

   
    
    return (<>
        <div className ="principal">
            <h1 className ="titulo">React Library</h1>
            <img id="lupa" src="./imgs/lupaG.gif"></img>
            <div className ="btn-group seleccion" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className ="btn btn-outline-primary" onClick = {e => {setTipeOfBooks("all");}}>See all available books</button>
            </div>
        </div>    
        <div className="container">
            { typeOfBooks && loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
        </div>  
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
