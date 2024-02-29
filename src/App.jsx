import { useState } from 'react'
import './App.css'
import Card from "./Components/Card";


function App() {
  const App = () => {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (artist.trim().length < 3 || /^\s/.test(artist)) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      if (song.length < 6) {
        setError('Por favor chequea que la información sea correcta');
        return;
      }
  
      setError('');
    };
  
    return (
      <div>
        <h1>Formulario de información sobre música</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="artist">Artista:</label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="song">Canción:</label>
            <input
              type="text"
              id="song"
              value={song}
              onChange={(e) => setSong(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Enviar</button>
        </form>
        {artist && song && !error && <Card artist={artist} song={song} />}
      </div>
    );
  };
}

export default App
