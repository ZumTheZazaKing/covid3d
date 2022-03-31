import { StyleSheet } from "aphrodite";

export const SyptomsStyles = StyleSheet.create({
    wrapper:{
        backgroundColor:"#dee0e3",
        padding:"20px",
        width:"100vw",
        height:"100vh",
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
    container:{
        padding:"20px",
        width:"70%",
        height:"300px",
        marginLeft:"auto",
        marginRight:"auto",
        lineHeight:"1.5",
        borderRadius:"5px",
        marginBottom:"50px",
        backgroundColor:"rgba(0,0,0,0.7)",
        color:"white",
        display: 'flex',
    },
    syptomsContext:{
        flex:2,
        padding:"10px"
    },
    syptomsImage:{
        flex:1,
    },
    mostHeader:{color:"green"},
    lessHeader:{color:"orange"},
    seriousHeader:{color:"red"}
})