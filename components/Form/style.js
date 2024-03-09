import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
    addTask : {
        bottom : 30,
        paddingHorizontal : 25,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    input : {
        height : 44,
        width : '83%',
        backgroundColor : color.white,
        borderWidth : 1,
        borderColor : color.primary,
        borderRadius : 20,
        paddingHorizontal : 20
    },

    iconWrapper : {
        width : 40,
        height : 40,
        backgroundColor : color.primary,
        justifyContent : 'center',
        alignItems: 'center',
        borderRadius : 20,
        borderColor : color.background
    },

    icon : {
        fontSize : 30,
        color : color.white
    }
})

export default styles;