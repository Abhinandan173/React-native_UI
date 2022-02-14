import React from 'react'
import {
	ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {COLORS} from './colors'


class ForgotPassword extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        emailId:'',
    };
}

componentDidMount = async () => {
    console.log('props redux store----', this.props);
}


    render() {
         return (
        <ScrollView behavior="height" style={styles.container}>
            
            <View style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginTop:hp('7%')
            }}>
                <Image
                    source={require('../assets/app_logo.png')}
                    style={{
                        height:73,
                        width:46,
                        resizeMode: 'cover',
                    }}
                />
            </View>
            <View style={{
                marginHorizontal:wp('5%')
            }}>

            <View style={{marginTop:hp('3%')}}>
                <Text  style={{color:COLORS.black, fontSize:wp('7%'), fontWeight:'bold'}}>
                    Forgot{'\n'}Password?
                </Text>
            </View>

            <View style={{marginTop:hp('3%')}}>
                <Text>
                Don’t worry! It happens. Please enter
                Email Id associated with your account.
                </Text>
            </View>

            <View style={{marginVertical:hp('5%')}}>
                <TextInput
                    placeholder="Email Address"
                    style={styles.textInput}
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={(email) => this.setState({ emailId: email })}
                /> 
                </View>

            <View style={{marginTop:hp('2%')}}>
                <TouchableOpacity
                    onPress={() => console.log('****')}
                    style={{
                        backgroundColor: COLORS.black,
                        marginTop: hp('2.5%'),
                        alignItems: 'center',
                        justifyContent:'center',
                        borderRadius: wp('1.3%'),
                        height:hp('8%')
                    }}
                >
                    <Text style={{ fontWeight:'bold', color:COLORS.white, fontSize:wp('6%') }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
            </View>

            </ScrollView>
        )
    }
}

export default ForgotPassword;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
        zIndex: 1,
	},
	textInput: {
		borderRadius: wp('1.3%'),
		paddingHorizontal: wp('3.5%'),
		width: wp('90%'),
		marginTop: hp('2.5%'),
		height: hp('8%'),
        borderWidth:2,
        backgroundColor:COLORS.lightGrey,
        borderColor:COLORS.lightGrey
	},
})