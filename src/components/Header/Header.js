import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom"
import { Article } from "@mui/icons-material"

import { userContext } from "../../context/userContext";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElNav: null,
      anchorElUser: null
    }
  }

  handleOpenNavMenu = (event) => {
    this.setState({ anchorElNav: event.target });
  };

  handleOpenUserMenu = (event) => {
    this.setState({ anchorElUser: event.target });;
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  handleCloseUserMenu = () => {
    this.setState({anchorElUser: null});
  };

  render() {
    return (<AppBar sx={{
      background: '#000000'
    }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Article sx={{ display: { background: '#000000', xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { background: '#000000', xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            "w5.PRESSROOM"
          </Typography>

          <Box sx={{ background: '#000000', flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(this.state.anchorElNav)}
              onClose={this.handleCloseNavMenu}
              sx={{
                display: { background: '#272A31', xs: "block", md: "none" }
              }}
            >
              
              <MenuItem key="Home" onClick={this.handleCloseNavMenu}>
                  <Link to="/">Home</Link>
              </MenuItem>
              
              
              <MenuItem key="News" onClick={this.handleCloseNavMenu}>
                  <Link to="/news">News</Link>
              </MenuItem>
              
              <MenuItem key="Create" onClick={this.handleCloseNavMenu}>
                  <Link to="/create">Create</Link>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { background: '#000000', xs: "none", md: "none" }, mr: 1 }} />
          <Typography
            variant="h7"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { background: '#000000', xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            w5.PRESSROOM
          </Typography>
          <Box sx={{ background: '#000000', flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              
                <MenuItem key="Home" onClick={this.handleCloseNavMenu}>
                  <Link to="/"><Button>Home</Button></Link>
                </MenuItem>
              
              
                <MenuItem key="News" onClick={this.handleCloseNavMenu}>
                  <Link to="/news"><Button>News</Button></Link>
                </MenuItem>
              
              
              <MenuItem key="Create" onClick={this.handleCloseNavMenu}>
                <Link to="/create"><Button>Create</Button></Link>
              </MenuItem>
              
          </Box>
            
          <Box sx={{ background: '#000000', flexGrow: 0 }}>
            <userContext.Consumer>
            {({user}) => <Typography color="inherit">Hi {user}!</Typography>}
            </userContext.Consumer>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  )}
};

export default Header;
