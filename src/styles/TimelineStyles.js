import { StyleSheet } from "aphrodite";

export const TimelineStyles = StyleSheet.create({
    backButton:{
        padding:"20px",
        border:"none",
        outline:"none",
        backgroundColor:"transparent",
        fontWeight:"bold",
        fontSize:"18px",
        cursor:"pointer",
        position:"fixed",
        top:0,
        left:0
    },
    header:{
        textAlign:"center",
        padding:"20px"
    },
    canvas:{
        width:"100vw",
        height:"100vh",
        position:"fixed",
        top:0,
        left:0,
        zIndex:-1
    },
    leftEvent:{
        left:"-400px",
    }
})