import './App.css';
import CollectionPage from './components/CollectionPage';

const categories = [
  {
    id: 'qwrcrEDr2',
    title: 'category1',
    position: 'h',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
  {
    id: 'qwrcefrEDr2',
    title: 'category2',
    position: 'h',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
  {
    id: 'qwrgtrcrEDr2',
    title: 'category3',
    position: 'h',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
  {
    id: 'qwrcrEDr232',
    title: 'category4',
    position: 'v',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
  {
    id: 'qwrcAEDr2',
    title: 'category5',
    position: 'h',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
  {
    id: 'qwraaqqqqqcrEDr2',
    title: 'category6',
    position: 'h',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
  {
    id: 'qwrcrEqweDr2',
    title: 'category7',
    position: 'v',
    products: [
      {
        id: 'gcdsFe90',
        title: 'product1',
      },
      {
        id: 'gcdsFe90',
        title: 'product2',
      },
      {
        id: 'gcdsFe90',
        title: 'product3',
      },
      {
        id: 'gcdsFe90',
        title: 'product4',
      },
    ]
  },
]

const App = () => {
  return (
    <CollectionPage categories={categories}/>
  );
}

export default App;
