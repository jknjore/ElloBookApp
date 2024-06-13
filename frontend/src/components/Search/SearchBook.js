import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { addAllBooks } from '../../redux/actions/bookActions';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Typography } from '@mui/material';
import './SearchBook.scss'
import { Link, useNavigate } from 'react-router-dom';


export default function SearchBooks() {
const books = useSelector((state)=>state.booksInfo.allBooks);
 
 const [options, setOptions] = React.useState([]);
 const [value, setValue] = React.useState(null);
 const [inputValue, setInputValue] = React.useState('');
 const inputElement = React.useRef();
 const navigate = useNavigate()


 React.useEffect(() => {
    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    setOptions(books.filter((book)=>book.title.toLowerCase().includes(inputValue.toLowerCase())))

  }, [value, inputValue]);

  const handleSubmit=(e)=>
    {
      e.preventDefault()
      const searchTerm = inputValue
      setInputValue("")
      setValue("")
      inputElement.current.blur();
      navigate(`/search-books/${searchTerm}`)
    }

    const handleClick=(e)=>
      {
      setInputValue("")
      setValue("")
      inputElement.current.blur();
      }
  

  return (
    <form onSubmit={handleSubmit}>
  <Autocomplete
      ref={inputElement}
      style={{backgroundColor:"white",borderRadius:"10px"}}
      options={options}
      getOptionLabel={(dataList) =>
         dataList.title || ""
      }
      sx={{ width: 500 }}
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText="Search results display here"
    onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="" fullWidth 
        placeholder="Search books by title" 
            InputProps={{ ...params.InputProps, 
            startAdornment: ( <InputAdornment position="start"> <SearchIcon /> 
            </InputAdornment> ) }}/>
      )}

      renderOption={(props, option) => {       
        return (
          <li>
             <Link onClick={handleClick} style={{all:"unset"}} to={`/book/${option.title}/${option.author}`}>
            <Grid className='searchItems' container alignItems="center">
              <Grid className='gridImage' item sx={{ display: 'flex' }}>
              <img className='searchImage' src={`/${option.coverPhotoURL}`} alt='Img Missing' />
              </Grid>
              <Grid className='gridLabel' item sx={{wordWrap: 'break-word' }}>
             <Box component="span" sx={{ fontWeight:'regular' }} >
                   {option.title}
                  </Box>
                   <Typography className='gridAuthor' variant="body2" color="text.secondary">
                  {option.author}
                </Typography>
              </Grid>
            </Grid>
            </Link>
          </li>
        );
      }}
    />
  </form>
  );
}