import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Container from '@mui/material/Container';
import Link from "next/link";



function ResponsiveAppBar() {

    return (
        <div style={{position:"sticky",backgroundColor:"blue"}}>
            <div >
                <div >
                    <div>
                        {["about", "posts"].map((page) => (
                            <Link  key={page} href={`/${page}`} style={{textDecoration: "none"}}>
                                    {page}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveAppBar;