import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Button from '@mui/material/Button'

//basic Navigation bar
function Header() {


    return (
        <AppBar position="static" className='Appbar'>
            <Toolbar variant="dense" className='Toolbar'>
                <Button sx={{ color: "black" }} component={RouterLink} to="/">{("Home")}</Button>
                <Button sx={{ color: "black" }} component={RouterLink} to="/register">{("Register")}</Button>
                <Button sx={{ color: "black" }} component={RouterLink} to="/login">{("Login")}</Button>
                <Button sx={{ color: "black" }} component={RouterLink} to="/logout">{("Logout")}</Button>
                <Button sx={{ color: "black" }} component={RouterLink} to="/snippets">{("Snippets")}</Button>
                <Button sx={{ color: "black" }} component={RouterLink} to="/newSnippet">{("Add new snippet")}</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header