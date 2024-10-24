import React, { useState } from 'react';

// Componente principal do aplicativo
function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Estado de login
  const [username, setUsername] = useState(''); // Estado para o nome de usuário
  const [password, setPassword] = useState(''); // Estado para a senha
  const [savedRecipes, setSavedRecipes] = useState([]); // Estado para receitas favoritas
  const [recipes] = useState([ // Lista de receitas
    { id: 1, name: 'Spaghetti Carbonara', description: 'Massa cremosa com bacon e ovos.' },
    { id: 2, name: 'Frango ao Curry', description: 'Frango cozido com molho de curry e especiarias.' },
    { id: 3, name: 'Bolo de Cenoura', description: 'Bolo fofinho com cobertura de chocolate.' }
  ]);

  // Função para verificar o login
  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true); // Login bem-sucedido
    } else {
      alert('Usuário ou senha incorretos'); // Login falhou
    }
  };

  // Função para salvar receitas favoritas
  const handleSaveRecipe = (recipe) => {
    if (!savedRecipes.includes(recipe)) {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LoginScreen
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <RecipePage
          recipes={recipes}
          handleSaveRecipe={handleSaveRecipe}
          savedRecipes={savedRecipes}
        />
      )}
    </div>
  );
}

// Componente de Tela de Login
const LoginScreen = ({ username, setUsername, password, setPassword, handleLogin }) => (
  <div className="login-container">
    <h2>Login</h2>
    <input
      type="text"
      placeholder="Usuário"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Senha"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Entrar</button>
  </div>
);

// Componente de Página de Receitas
const RecipePage = ({ recipes, handleSaveRecipe, savedRecipes }) => (
  <div className="container">
    <h1>Receitas</h1>
    <div className="flex">
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleSaveRecipe(recipe)}>Salvar como Favorita</button>
          </div>
        ))}
      </div>
      <div className="saved-recipes">
        <h2>Receitas Favoritas</h2>
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <div key={recipe.id} className="saved-recipe-item">
              <h4>{recipe.name}</h4>
            </div>
          ))
        ) : (
          <p>Nenhuma receita salva ainda.</p>
        )}
      </div>
    </div>
  </div>
);

export default App;