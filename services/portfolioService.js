const boom = require('@hapi/boom');

class PortfolioService{
  constructor() {
    this.portfolio = [];
    this.generate();
  }

  async generate(){
    this.portfolio.push(
        {
          'id': '1',
          'title': 'Platzi Video',
          'technology': 'React Native | React',
          'date': '23/01/2021',
          'status': 'incomplete',
          'linkProject': 'https://github.com/alejandroverita/platzi-video-react',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Platzi Video',
        },
        {
          'id': '2',
          'title': 'Batata Bit ',
          'technology': 'HTML | CSS',
          'date': '16/01/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/batata-bit-responsive-design/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Interfaz de una plataforma para el intercambio de criptomonedas.',
        },
        {
          'id': '3',
          'title': 'Movie Layout',
          'technology': 'HTML | CSS',
          'date': '09/02/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/movies/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Diseno de MoviePage con el uso de CSS Grid',
        },
        {
          'id': '4',
          'title': 'Mi Blog ',
          'technology': 'HTML | CSS',
          'date': '27/02/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/blog/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Interfaz de un blog de prueba desarrollado con HTML y CSS',
        },
        {
          'id': '5',
          'title': 'Simon Dice ',
          'technology': 'HTML | CSS | JS',
          'date': '04/03/2021',
          'status': 'complete',
          'linkProject': 'https://alejandroverita.github.io/SimonDice/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Juego con JS Vanilla. Memoriza y adivina los colores',
        },
        {
          'id': '6',
          'title': 'EuroFighter 2021',
          'technology': 'HTML | CSS | Bootstrap',
          'date': '02/04/2021',
          'status': 'complete',
          'linkProject': 'https://alejandroverita.github.io/bootstrap-eurofighter-2021/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Framework de Css | Bootstrap | Aviation | Eurofighter',
        },
        {
          'id': '7',
          'title': 'Aviation News',
          'technology': 'HTML | CSS | Materialize',
          'date': '21/04/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/materialize-aviation-news/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Framework de Css | Materialize | Aviation | CessnaLover',
        },
        {
          'id': '8',
          'title': 'Avocado DOM API',
          'technology': 'HTML | CSS | Javascript',
          'date': '13/08/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/aguacates-dom-api/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Conectando a una API de un Aguacate',
        },
        {
          'id': '9',
          'title': 'Random Fox',
          'technology': 'HTML | CSS | Javascript',
          'date': '14/08/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/randomFox/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Conectando a una API de zorritos',
        },
        {
          'id': '10',
          'title': 'Wheather App',
          'technology': 'HTML | CSS | Javascript',
          'date': '15/08/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/wheather-app-js/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Capturando el tiempo ',
        },
        {
          'id': '11',
          'title': 'Merchandise Card ',
          'technology': 'HTML | CSS | Javascript',
          'date': '16/08/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/web-components/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Web Components | Js | Merchandise',
        },
        {
          'id': '12',
          'title': 'To-Do List ',
          'technology': 'HTML | CSS | React',
          'date': '15/09/2021',
          'status': 'incomplete',
          'linkProject': 'https://alejandroverita.github.io/react-ToDo/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Take notes of your task ',
        },
        {
          'id': '13',
          'title': 'Platzi Store',
          'technology': 'HTML | CSS | React ',
          'date': '29/11/2021',
          'status': 'complete',
          'linkProject': 'https://platzi-store-react.netlify.app/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'SPA of a fictitious mini store',
        },
        {
          'id': '14',
          'title': 'Rick and Morty Page ',
          'technology': 'HTML | CSS | React ',
          'date': '20/12/2021',
          'status': 'complete',
          'linkProject': 'https://alejandroverita.github.io/rickandmorty-react-hooks/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Rick and morty characters and description with React',
        },
        {
          'id': '15',
          'title': 'Platzi Conf Merch ',
          'technology': 'HTML | CSS | React | Babel | Webpack',
          'date': '27/12/2021',
          'status': 'complete',
          'linkProject': 'https://platzi-conf-merch-alejandroverita.netlify.app/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Merchandise of Platzi Conf',
        },
        {
          'id': '16',
          'title': 'Petgram App',
          'technology': 'HTML | CSS | React | Babel | Webpack | Cypress | GraphQl',
          'date': '27/12/2021',
          'status': 'complete',
          'linkProject': 'https://petgram-alejandroverita.netlify.app/',
          'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
          'description': 'Pet photo of your favorites pets',
        },
    )
  }

  async create(data){
    const index = this.portfolio.lastIndexOf

    const newProject = {
      id: index + 1,
      ...data
    }

    this.portfolio.push(newProject)

    return newProject
  }

  async find(){
    return this.portfolio;
  }

  async findOne(id){
    const portfolio = this.portfolio.find(item => item.id === id)

    if(!portfolio){
      throw boom.notFound(`The product ID: ${id} was not found`)
    }

    return portfolio
  }

  async update(id, body){
    const index = this.portfolio.findIndex(item => item.id === id)
    if( index === -1 ){
      throw boom.notFound(`The ID number ${id} was not found`)
    }
    const portfolio = this.portfolio[index]

    this.portfolio[index] = {
      ...portfolio,
      ...body
    }

    return this.portfolio[index]
  }

  async delete(id){
    const index = this.portfolio.findIndex(item => item.id === id)

    if (index === -1){
      throw boom.notFound(`The ID number ${id} was not found`)
    }

    this.portfolio.splice(index, 1);

    return `Item ID ${id} succefully deleted`
  }
}

module.exports = PortfolioService;
