import Box from "@mui/material/Box";

function Footer() {
    return <Box sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        minHeight: 100,
        backgroundColor: "#475562",
        color: "#ffffff",
        justifyContent: "center"
    }}>
        <Box sx={{textAlign: "center",}}>
            Tomeyan
        </Box>
    </Box>
}

export default Footer