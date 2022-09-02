import { StyleSheet } from "aphrodite";

export const StatsStyles = StyleSheet.create({
    wrapper:{
        width:"100vw",
        height:"100vh",
        position:"fixed",
        top:0,
        left:0
    },  
    backButton:{
        padding:"20px",
        fontSize:"18px",
        fontWeight:"bold",
        border:"none",
        outline:"none",
        backgroundColor:"transparent",
        cursor:"pointer",
        margin:0,
        float:"left"
    },
    header:{
        textAlign:"center",
        padding:"20px",
        margin:0
    },
    canvas:{
        position:"fixed",
        top:0,
        left:0,
        width:"100vw",
        height:"100vh",
        zIndex:-1,
        backgroundColor:"white"
    },
    blocker:{
        position:"fixed",
        bottom:0,
        right:0,
        zIndex:2,
        backgroundColor:"white",
        width:"305px",
        height:"40px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})