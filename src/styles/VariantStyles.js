import { StyleSheet } from "aphrodite";

export const VariantStyles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#dee0e3',
        overflow:"auto",
        height:'100vh',
        width:'100vw',
        padding:"50px",
        '@media (max-width: 1000px)':{
            padding:"20px"
        }
    },
    container:{
        width:"100%",
        textAlign:"center",
        padding:"20px",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:"rgba(0,0,0,0.7)",
        borderRadius:"10px",
        color:"white",
        '@media (min-width: 1000px)':{
            height:"100%"
        }
    },
    backButton:{
        float:"left",
        border:"none",
        backgroundColor:"transparent",
        color:"white",
        fontSize:"16px",
        cursor:"pointer"
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
        '@media (max-width: 1000px)':{
            flexDirection:"column-reverse"
        }
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
        },
        '@media (max-width: 1000px)':{
            display: 'none',   
        }
    },
    mobileButton:{
        flex:1,
        cursor:"pointer",
        border:"none",
        outline:"none",
        backgroundColor:"rgba(0,0,0,0.5)",
        color:"white",
        fontSize:"48px",
        ":hover":{
            color:"skyblue"
        },
        '@media (min-width: 1000px)':{
            display: 'none',   
        }
    },
    contentInfo:{
        flex:2,
        padding:"20px",
        lineHeight:1.5,
        fontSize:"14px"
    },
    contentImage:{
        flex:1,
        display: 'flex',
    }
})