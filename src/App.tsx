import './App.css'

function App() {
  

  return (
    <>
     <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:30, padding: '2em', background: 'linear-gradient(to right, #ff7e5f, #feb47b)'}}>
        <div id='profile-picture-container' style={{width: '100px', borderRadius: '50%', overflow: 'hidden', border: '5px solid white'}}>
          <img 
            // src="https://avatars.githubusercontent.com/u/51330881?v=4" 
            src="https://github.com/RodrigoCezarLeao.png" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transform: 'scale(1.3) translateY(10px)'
            }}
          />
        </div>
        <div>
          <h1>Rodrigo Cezar Leão</h1>
          <h3>Desenvolvedor Web - FullStack</h3>
        </div>
        
     </div>
    </>
  )
}

export default App
