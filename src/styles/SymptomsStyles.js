import { StyleSheet } from "aphrodite";

export const SymptomsStyles = StyleSheet.create({
    wrapper:{
        padding:"20px",
        overflow:"auto"
    },
    title:{
        textAlign:"center",
    },
    backButton:{
        fontSize:"18px",
        fontWeight:"bold",
        backgroundColor:"transparent",
        border:"none",
        outline:"none",
        cursor:"pointer",
        float:"left"
    },
    canvas:{
        width: "100vw",
        height: "100vh",
        position:"fixed",
        zIndex:"-1",
        top:0,
        left:0,
        backgroundColor:"#dee0e3",
        border:"1px solid black"
    },
})