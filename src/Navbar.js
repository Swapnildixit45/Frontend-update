import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Logo from "./Images/Logo.png"
import SecNav from './SecNav';

function Navbar() {
  return (
    <><nav class="navbar navbar-expand-lg bg-dark variant-dark">
      <div class="container-fluid">
        <img class="navbar-brand" src={Logo} alt=' ' width="90" height="80" type="button" href="/"></img>
        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <form class="d-flex mt-3" role="search" style={{ width: "800px", height: "40px" }}>
              <input class="form-control me-2 mx-4" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-transparent mx-3" type="submit" style={{color:"white"}}>
                <SearchIcon />
              </button>
            </form>
            <div class="d-flex mt-3">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hello Guest
                </a>
                <ul class="dropdown-menu me-auto">
                  <li><a class="dropdown-item" href="/login">Login</a></li>
                  <li><a class="dropdown-item" href="/signup">Signup</a></li>
                </ul>
              </li>
            </div>
            <div class="d-flex">
              <button class="btn btn-outline-transparent mx-3 mt-3" type="submit" style={{color:"#FFFF"}}>
                <ShoppingCartIcon />
              </button>
              <button class="btn btn-outline-transparent mx-2 mt-3" type="submit" style={{color:"#FFFF"}}>
                <FavoriteIcon />
              </button>
              <button class="btn btn-outline-transparent mx-3 mt-3" type="submit" style={{color:"#FFFF"}}>
                <ThumbUpOffAltIcon />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
        <SecNav/>
      </>
  )
}

export default Navbar