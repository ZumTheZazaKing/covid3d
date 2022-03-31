import { StyleSheet } from "aphrodite";

export const LoadingStyles = StyleSheet.create({
    container:{
        width:"100vw",
        height:"100vh",
        position:"fixed",
        top:0,
        left:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        backgroundColor:"#dee0e3",
    },
    text:{
        fontWeight:"bold"
    }
})