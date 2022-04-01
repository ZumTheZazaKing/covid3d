import { StyleSheet } from "aphrodite";

export const StoryStyles = StyleSheet.create({
    canvas:{
        width: "100vw",
        height: "100vh",
        position:"fixed",
        top:0,
        left:0,
        zIndex: -1,
        backgroundColor:"#232423",
    },
    title:{
        textAlign: "center",
    },
    backButton:{
        padding:"20px",
        border:"none",
        outline:"none",
        backgroundColor:"transparent",
        fontSize:"16px",
        float:"left",
        cursor:"pointer",
        color:"white"
    }
})