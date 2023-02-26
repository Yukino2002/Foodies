import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import recipes from './database/services/recipes';
import Recipe from './Recipe';
import RecipeForm from "./RecipeForm";
import Dashboard from "./Dashboard";
import SignIn from "./Login";
import SignUp from "./Signup";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

// import { useDispatch, useSelector } from 'react-redux';
// import { setUser } from './Reducers/userReducer';
// import { getAuth } from 'firebase/auth';
// const auth = getAuth();
// const dispatch = useDispatch();
// dispatch(setUser(auth.currentUser));
// to get the user
// const user = useSelector((state) => state.user);

export default function App() {
    const match = useMatch('/recipes/:id');
    const [allRecipes, setAllRecipes] = React.useState([]);
    const recipe = match? allRecipes.find((recipe) => recipe.id === match.params.id) : null;

    React.useEffect(() => {
        recipes.getAllRecipes().then((data) => {
            setAllRecipes(data);
        });
    }, [])

    return (
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="recipes" element={<Recipes recipes={allRecipes}/>} />
                <Route path="recipes/:id" element={<Recipe recipe={recipe} />} />
                <Route path="recipe/new" element={<RecipeForm />} />
                <Route path="login" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

