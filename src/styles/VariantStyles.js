import { StyleSheet } from "aphrodite";

export const VariantStyles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#dee0e3',
        height:'100vh',
        width:'100vw',
        padding:"50px",
    },
    container:{
        width:"100%",
        height:"100%",
        textAlign:"center",
        padding:"20px",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:"rgba(0,0,0,0.7)",
        borderRadius:"10px",
        color:"white"
    },
    backButton:{
        float:"left",
        border:"none",
        backgroundColor:"transparent",
        color:"white",
        fontSize:"16px"
    },
    header:{},
    content:{
        width:"100%",
        flex:1,
        display: 'flex',
    },
    mainContent:{
        flex:8,
        display: 'flex',
        textAlign:"left",
    },
    button:{
        flex:1,
        cursor:"pointer",
        border:"none",
        outline:"none",
        backgroundColor:"rgba(0,0,0,0.5)",
        color:"white",
        fontSize:"100%",
        ":hover":{
            color:"skyblue"
        }
    },
    contentInfo:{
        flex:2,
        padding:"20px",
        lineHeight:1.5
    },
    contentImage:{
        flex:1,
    }
})