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


class ChangePassword extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        passwordValue:'',
        newPasswordValue:'',
        confirmPassword:'',
        eyeOff:false
    };
}

componentDidMount = async () => {
    console.log('props redux store----', this.props);
}


    render() {
         return (
        <ScrollView behavior="height" style={styles.container} showsVerticalScrollIndicator={false}>
            
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
                    Change {'\n'}Password
                </Text>
            </View>

            <View style={{marginTop:hp('3%')}}>
                <Text>
                    Change your password in easy steps!
                </Text>
            </View>

            <View style={{marginTop:hp('1%')}}>
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
                        placeholder="Current Password"
                        placeholderTextColor={COLORS.medGrey}
                        keyboardType="default"
                        secureTextEntry={this.state.eyeOff}
                        style={{
                            borderRadius: wp('1.3%'),
                            width: wp('70%'),
                            height: hp('6.8%'),
                        }}
                        returnKeyType="done"
                        onChangeText={(value) =>this.setState({ passwordValue: value })}
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
                        placeholder="New Password"
                        placeholderTextColor={COLORS.medGrey}
                        keyboardType="default"
                        secureTextEntry={this.state.eyeOff}
                        style={{
                            borderRadius: wp('1.3%'),
                            width: wp('70%'),
                            height: hp('6.8%'),
                        }}
                        returnKeyType="done"
                        onChangeText={(value) =>this.setState({ newPasswordValue: value })}
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
                        placeholder="Confirm Password"
                        placeholderTextColor={COLORS.medGrey}
                        keyboardType="default"
                        secureTextEntry={this.state.eyeOff}
                        style={{
                            borderRadius: wp('1.3%'),
                            width: wp('70%'),
                            height: hp('6.8%'),
                        }}
                        returnKeyType="done"
                        onChangeText={(value) =>this.setState({ confirmPassword: value })}
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

            <View style={{marginTop:hp('2%')}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
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
                        Change Password
                    </Text>
                </TouchableOpacity>
            </View>
            </View>

            </ScrollView>
        )
    }
}

export default ChangePassword;

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