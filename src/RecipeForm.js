import React, {useState} from "react"
import {Paper, Stack, styled, TextField} from "@mui/material";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from '@mui/material/Box';
import recipes from './database/services/recipes.js';
import { getAuth } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {storage} from "./database/auth";


import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';
import Button from "@mui/material/Button";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const RecipeForm = () => {
  const [ingredientForm, setIngredientForm] = useState([{ name: "" }])
  const [instructionForm, setInstructionForm] = useState([{ step: "" }])
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    origin: "",
    prepTime: "",
    servingSize: "",
    source: ""
  })
  const auth = getAuth();
  const navigate = useNavigate();
  const user = auth.currentUser;

  function handleChange(e) {
    if (e.target.files[0])
      setFile(e.target.files[0]);
    console.log(file)
  }

  async function handleUpload() {
    const path = `/images/${file.name}`;
    const ref = storage.ref(path);
    await ref.put(file);
    const url = await ref.getDownloadURL();
    setURL(url);
    setFile(null);
  }

  const addIngredient = () => {
    setIngredientForm([...ingredientForm, { name: "", amount: "" }])
  }

  const addInstruction = () => {
    setInstructionForm([...instructionForm, { step: "" }])
  }

  const addRecipe = (e) => {
    e.preventDefault()
    const ingredients = ingredientForm.map((ingredient, index) => {
      return e.target[`name-${index}`].value
    })

    const instructions = instructionForm.map((instruction, index) => {
      return e.target[`step-${index}`].value
    })

    const user = auth.currentUser;

    handleUpload()
      .then(() => {
        const recipeToUpload = {...recipe, instructions, ingredients, user: user.uid, imageUrl: url}
        console.log(recipeToUpload)
        recipes.addRecipe(recipeToUpload)
          .then(() => {
            navigate('/recipes')
          })
    })
  }



  return (
    <>
      <Box>
      <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

            <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
                <h1>Foodies<span>.</span></h1>
            </a>

            <div>
                {user ?<><a className="btn-book-a-table" href="/dashboard">Profile</a></> 
                : <><a className="btn-book-a-table" href="/signup">Join us</a>
                <a className="btn-book-a-table" href="/login">Log in</a></>}
            </div>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

            </div>
        </header>
      </Box>

      <Box
        sx={{
          background: 'rgba(0, 0, 0, 0.175)',
          mt: 11,
        }}
        noValidate
        autoComplete="off"
      >
      <Stack spacing={2}>
        <form onSubmit={(e) => addRecipe(e)}>
          <Item>
            <TextField fullWidth id="name" label="Name" variant="outlined"
                       value={recipe.name}
                       onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            />
          </Item>
          <Item>
            <TextField fullWidth id="Description" label="description" variant="outlined" helperText='Tell us something about the dish'
                        value={recipe.description}
                        onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
            />
          </Item>
          <Item>
            Ingredients
          </Item>
          {ingredientForm.map((ingredient, index) => {
            return (
              <Item key={index}>
                <div>
                  <TextField id="name" label="Name" variant="outlined" name={`name-${index}`} />
                </div>
              </Item>
            )
          })}
          <Item>
            <Button variant="contained" color="error" onClick={addIngredient} sx={{ margin: '20px' }}>
              Add Ingredient
            </Button>
          </Item>
          <Item>
            Instructions
          </Item>
          {instructionForm.map((instruction, index) => {
            return (
              <Item key={index}>
                <div>
                  <TextField fullWidth multiline id="step" label={`Step ${index + 1}`} variant="outlined" name={`step-${index}`}/>
                </div>
              </Item>
            )
          })}
          <Item>
            <Button variant="contained" color="error" onClick={addInstruction} sx={{ margin: '20px' }}>
              Add Instruction
            </Button>
          </Item>
          <Item>
            <TextField fullWidth id="origin" label="origin" variant="outlined"
                        value={recipe.origin}
                        onChange={(e) => setRecipe({ ...recipe, origin: e.target.value })}
            />
          </Item>
          <Item>
          <TextField fullWidth id="prepTime" label="prep time" variant="outlined" helperText='in minutes'
                    value={recipe.prepTime}
                    onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value })}
          />
          </Item>
          <Item>
          <FormControl fullWidth>
            <InputLabel id="serving size">Serving Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Serving Size"
              value={recipe.servingSize}
              onChange={(e) => setRecipe({ ...recipe, servingSize: e.target.value })}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
            </Item>
          <Item>
          <TextField fullWidth multiline id="source" label="source" variant="outlined" helperText='Tell us something interesting about the dish'
                    value={recipe.source}
                    onChange={(e) => setRecipe({ ...recipe, source: e.target.value })}
          />
            </Item>
          <Item>
            <div>
                <input type="file" onChange={handleChange} />
            </div>
          </Item>
          <Item>
            <Button variant="contained" color="error" type='submit' sx={{ margin: '20px' }} disabled={!file}>
              Submit Recipe
            </Button>
            </Item>
          </form>
      </Stack>
      </Box>
    </>
  )
}

export default RecipeForm