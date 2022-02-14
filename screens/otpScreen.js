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


class OtpScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        otpValue:null
    };
}

componentDidMount = async () => {
    console.log('props redux store----', this.props);
}


    render() {
         return (
        <View behavior="height" style={styles.container}>
            
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

            <View style={{marginTop:hp('4%')}}>
                <Text style={{color:COLORS.black, fontSize:wp('7%'), fontWeight:'bold'}}>
                    Enter OTP 
                </Text>
            </View>
            <View style={{marginTop:hp('3%')}}>
                <Text>An 4 digit code has been sent to {'\n'}+91 90325 56565</Text>
            </View>
            <View style={{marginTop:hp('3%')}}>
            <TextInput
                keyboardType="numeric"
                maxLength={4}
                selectionColor={COLORS.black}
                autoFocus
                style={styles.otpInput}
                onChange={(value) => this.setState({otpValue:value})}
                returnKeyType='done'
            />
            </View>
            <View style={{marginTop:hp('5%'), display:'flex',alignItems:'center', flexDirection:'row'}}>
                <Text style={{fontSize:wp('4%'),}}>
                Didn’t got OTP? /
                </Text>
                <TouchableOpacity >
                    <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>
                        Resend OTP
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:hp('2%')}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ChooseLocation')}
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

            </View>
        )
    }
}

export default OtpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
        zIndex: 1,
	},
    otpInput: {
        backgroundColor: COLORS.lightGrey,
        width: wp('48%'),
        height: hp('8.5%'),
        marginTop:hp('5%'),
        textAlign: 'center',
        color: COLORS.black,
        fontSize: wp('5%'),
        letterSpacing:5,
        alignSelf:'center',
    }
})