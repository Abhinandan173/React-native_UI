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


class LoginScreen extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        selectedFeild:'Email',
        emailId:'',
        mobileNumber:null,
        passwordValue:'',
        eyeOff: false,
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

            <View style={{marginTop:hp('2%')}}>
                <Text style={{color:COLORS.black, fontSize:wp('7%'), fontWeight:'bold'}}>
                    Login {'\n'}To Bachat.
                </Text>
            </View>

            <View style={{marginTop:hp('1%'), display:'flex',alignItems:'center', flexDirection:'row'}}>
                <Text style={{fontSize:wp('4%'),}}>
                    Don’t have an account? /
                </Text>
                <TouchableOpacity >
                    <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>Create Account</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginTop:hp('4%'), }}>
                <TouchableOpacity onPress={()=> this.setState({selectedFeild:'Email'})}>
                    <Text style={
                        this.state.selectedFeild=='Email' ?styles.selectedFeild : styles.notSelectedFeild
                    }>
                        Email
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.setState({selectedFeild:'Mobile'})}>
                    <Text style={
                        this.state.selectedFeild=='Mobile' ?styles.selectedFeild : styles.notSelectedFeild
                    }>
                        Mobile
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:hp('4%')}}>
                {this.state.selectedFeild == 'Email' ? 
                <TextInput
                    placeholder="Email ID"
                    placeholderTextColor={COLORS.medGrey}
                    style={styles.textInput}
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={(email) => this.setState({ emailId: email })}
                /> :
                <TextInput
                    placeholder="Mobile Number"
                    placeholderTextColor={COLORS.medGrey}
                    style={styles.textInput}
                    keyboardType="numeric"
                    autoCorrect={false}
                    selectionColor={COLORS.green}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={(number) => this.setState({ mobileNumber: number })}
                />}

                
                <View
                    style={[
                        styles.textInput,
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }
                    ]}
                >
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={COLORS.medGrey}
                        keyboardType="default"
                        secureTextEntry={this.state.eyeOff}
                        style={{
                            borderRadius: wp('1.3%'),
                            width: wp('70%'),
                            height: hp('6.8%'),
                        }}
                        returnKeyType="done"
                        onChangeText={(value) =>this.setState({ confirmPasswordValue: value })}
                    />

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.eyeOff) {
                                    this.setState({ eyeOff: false });
                                } else {
                                    this.setState({ eyeOff: true });
                                }
                            }}
                        >
                            <Image
                                style={{
                                    width: wp('6%'),
                                    height: hp('4%'),
                                    resizeMode: 'contain',
                                    tintColor: COLORS.black
                                }}
                                color='black'
                                source={this.state.eyeOff ? require('../assets/eye_off.png') 
                                : require('../assets/eye_on.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{marginTop:hp('3%'), display:'flex',alignItems:'center', flexDirection:'row'}}>
                <Text style={{fontSize:wp('4%'),}}>
                    Forgot Password? /
                </Text>
                <TouchableOpacity >
                    <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>Click to Reset</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop:hp('2%')}}>
                <TouchableOpacity
                    onPress={() => console.log('+++')}
                    style={styles.login}
                >
                    <Text style={{ fontWeight:'bold', color:COLORS.white, fontSize:wp('6%') }}>Login</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.loginWithGoogle}
            >
                <Image
                    style={styles.googleImage}
                    source={require('../assets/google_icon.png')} 
                />
                <Text style={{fontWeight:'bold', fontSize:wp('5%')}}> Login with Google </Text>
            </TouchableOpacity>

            </View>
            </ScrollView>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
        zIndex: 1
	},
    selectedFeild:{
        color:COLORS.darkBlack,
        borderBottomWidth:2,
        borderBottomColor:COLORS.black,
        width:wp('42%'),
        textAlign:'center',
        paddingBottom:hp('1%')
    },
    notSelectedFeild:{
        color:COLORS.darkBlack, 
        width:wp('42%'),
        textAlign:'center',
        borderBottomWidth:1,
        borderBottomColor:COLORS.lightGrey,
        paddingBottom:hp('1%')
    },
	textInput: {
		borderRadius: wp('1.3%'),
		paddingHorizontal: wp('3.5%'),
		width: wp('90%'),
		marginTop: hp('2.5%'),
		height: hp('8%'),
        borderWidth:2,
        borderColor:COLORS.lightGrey,
        backgroundColor:COLORS.lightGrey
	},
    login:{
        backgroundColor: COLORS.black,
        marginTop: hp('2.5%'),
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: wp('1.3%'),
        height:hp('8%')
    },
    loginWithGoogle:{
        backgroundColor: COLORS.lightGrey,
        padding: 13,
        alignItems: 'center',
        marginVertical: hp('2%'),
        borderRadius: wp('0.5%'),
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: wp('1.3%'),
    },
    googleImage:{
        width: wp('5.4%'),
        height: hp('3%'),
        marginRight: 5,
        resizeMode: 'contain',
    }
})