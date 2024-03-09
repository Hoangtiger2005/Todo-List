import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({

    item : {
        flexDirection : 'row',
        backgroundColor : '#fff',
        marginBottom : 9,
        paddingVertical : 7,
        paddingHorizontal : 16,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    square : {
        height : 35,
        width: 45,
        
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    
    even : {
        backgroundColor: '#53d6f2'
    },

    odd : {
        backgroundColor : color.greenn
    },

    number : {
        fontSize : 16,
        fontWeight : '700',
        color : '#fff'
    },

    content : {
        width : '80%',
        fontSize : 16
    }

})

export default styles;