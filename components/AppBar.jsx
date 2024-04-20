import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from "next/link";
import {CssBaseline} from "@mui/material";

const pages = ["about", "posts"];

function ResponsiveAppBar() {

    return (
        <AppBar position={"sticky"}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: "center"}}>
                        {pages.map((page) => (
                            <Link href={`/${page}`} style={{textDecoration: "none"}}>
                                <Button
                                    key={page}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;