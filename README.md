# Website Replica

Replica de https://www.andrerieu.com/en/travel

## Similitudes entre los sitios en animaciones y hover mouse (de arriba hacia abajo)

Barra blanca de arriba (topbar): tiene los simbolos de las redes sociales, las cuales cambian de color con hover mouse.

Barra azul (navbar): aparece una linea ocre con hover mouse debajo de las pestañas "Home, Tour, About Andre, Webshop, Media, Cinema, News". Tambien se incluye el menu desplegable de la derecha, el cual enseña varios idiomas (como el sitio original).

Fotos de las ciudades (packages): Las imagenes de las ciudades hacen zoom con hover mouse, como en el sitio original.

Galeria de abajo (gallery): Tiene un video de youtube a reproducir, y la foto del violinista Rieu se puede manipular con el mouse y con la scroll wheel para zoom.

Footer (footer): Los simbolos de las redes sociales cambian con hover mouse.

Al descargar el codigo, es importante instalar React si se quiere ejecutar en un servidor local:

```bash
npm install react-scripts@latest
```

## Nota importante sobre la implementacion de imagenes
Ademas de usar el file loader para la seccion del TopBar con la imagen de "Andre Rieu and his Johann Strauss Orchestra", el fondo, y la foto de Rieu en la seccion "Gallery", se quiso implementar otra tecnología para relacionar el sitio con la replica. En el folder "Public", asi como en el bundle, se puede notar un archivo llamado "data.json". Se eligio esta tecnologia de crear una lista en un archivo.json con las fotos de las ciudades (y hacerle fetch en la seccion Package.js) para probar la funcionalidad de esta situacion. Y puedo decir que salio muy bien. Un ejemplo de una imagen citada desde el sitio original:
```
{
	"image": "https://www.andrerieu.com/site/assets/files/4040/birmingham_-_website.-main-img.jpg",
	"place": "Birmingham",
	"id": 1,
	"year": "April 2022",
	"color": "#e18800",
	"details": "Order Travel Package"
}
```
Fetch en Package.js para despues mapear las imagenes en el grid:
```javascript
useEffect(() => {
		fetch("../../../data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
```

## App Elements

```javascript

//Vista de App.js con los elementos que se incluyen en el sitio web
function App() {
	return (
		<div className="App" style={{
            background: 'url('+background+')',
            backgroundRepeat: 'no-repeat'
        }}>
			<Topbar />
			<Navbar />
			<Minibar />
			<Package />
			<Gallery />
			<Footer />
		</div>
	);
}

export default App;

```

## Tecnologias usadas y dependencias
Librerias de React, Boostrap,
Dependencias: express, react, react-dom, react-icons, react-scripts, react-zoom-pan-pinch. Loaders: Json Loader, Style Loader, CSS Loader, HTML Loader, File Loader. 
Otras dependencias relevantes:
```javascript
"devDependencies": {
    "@babel/core": "^7.17.9",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "@babel/eslint-parser": "^7.5.4",
    "babel-loader": "^8.2.5",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.1",
    "eslint": "^8.2.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-node": "^4.1.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.4",
    "eslint-plugin-react-hooks": "^4.3.0",
    "file-loader": "^6.2.0",
    "html-loader": "^3.1.0",
    "html-webpack-plugin": "^5.5.0",
    "json-loader": "^0.5.7",
    "mini-css-extract-plugin": "^2.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.8.1"
  }
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
