import './App.css';
import Fofocas from './components/Fofocas';
import Header from './components/Header';

const fofocas = [
    {
        titulo: 'Últimas Fofocas do Dia',
        manchete: 'Mauro é visto em encontro misterioso',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis voluptatem hic autem officia nesciunt aut cupiditate sint nihil perferendis, velit dolor eos atque repudiandae voluptatum nisi quis ut culpa?',
    },
    {
        titulo: 'Fofoca Quentinha',
        manchete: 'Aula de React tem surpresa inesperada',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis voluptatem hic autem officia nesciunt aut cupiditate sint nihil perferendis, velit dolor eos atque repudiandae voluptatum nisi quis ut culpa?',
    },
];

function App() {
    return (
        <>
            <Header />
            <Fofocas fofocas={fofocas} />
        </>
    );
}

export default App;
