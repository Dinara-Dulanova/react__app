import './app.css'
import Input from "../input"
import Button from "../button"
import Card from "../card"
import {useState, useEffect} from 'react'
import api from '../../utils/api'
import Spinner from '../spinner'



function App() {
  const [searchQuery, setSearchQuery] = useState("dog");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
     setSearchQuery(e.target.value);
  }

  const handleRequest = () => {
    setIsLoading(true);
    api
      .search(searchQuery)
      .then((data) => setCards(mapCards(data.results)))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };


  const mapCards = (cards) => {
    return cards.map((item) => ({
      id: item.id,
      src: item.urls.regular,
      alt: item.alt_description,
      title: item.user.name,
      subtitle: item.description,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);

  return (
    <div className="app">
      <div className="app__content">
        <form 
        className="app__search"
        onSubmit={handleFormSubmit}
        >
        <Input
            placeholder="Search free high-resolution photos"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button 
          type="submit">Search</Button>
        </form>
        <div className="app__cards">
        {!isLoading ? (
            cards.map((item) => (
              <Card
                key={item.id}
                {...item}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
