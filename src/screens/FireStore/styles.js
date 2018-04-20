import {StyleSheet} from 'react-native'
import Colors from '../../utils/Colors';

export default StyleSheet.create({
    keyboardContainer: {
        width: '100%',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },

    textInputContainer: {
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.GRAY_LIGHT,
        borderBottomWidth: 1,
        borderRadius: 5,
        width: '100%',
        paddingLeft: 8,
        paddingRight: 8,
        height: 48,
    },

    buttonContainer: {
        width: '100%',
        paddingBottom: 16,
    },

    button: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLUE,
        height: 40,
    },

    buttonText: {
        color: Colors.WHITE,
    },
})