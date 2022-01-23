import React from 'react';
import '../header/header.css'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <header className='header'>
      <div className='headerleft'>
        <a href="#">
          <h1>
            MaileX
          </h1>
        </a>
      </div>
      <div className='headercenter'>
        <img src="https://raw.githubusercontent.com/alifaizan786-op/Full_Stack_Portfolio/main/assets/images/placeholder.png" alt="" srcset="" />
      </div>
      <div className='headerright'>
        <div className='search'>
        <Input
          id="input-with-icon-adornment"
          placeholder='Search'
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        </div>

      </div>
    </header>
  );
}

export default Header;
