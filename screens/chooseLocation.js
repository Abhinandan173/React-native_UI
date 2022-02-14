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
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


class ChooseLocation extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        adreess1:'',
        adreess2:'',
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
    };
}

    componentDidMount = async () => {
        console.log('props redux store----', this.props);
    }

    onRegionChange(region) {
        // this.setState({ region: region });
        console.log('region---', region);
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
                    Choose Location
                </Text>
            </View>

            <View 
                style={{
                    marginTop:hp('3%'),
                    height:hp('25%'),
                    width:wp('90%'),
                    backgroundColor:COLORS.lightGrey
                }}
            >
                <MapView 
                    style={styles.map}
                    // region={this.state.region}
                    // onRegionChange={this.onRegionChange}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                />
            </View>

            <View style={{marginVertical:hp('2%')}}>
                <TextInput
                    placeholder="Address Line 1"
                    style={styles.textInput}
                    keyboardType="default"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={(value) => this.setState({ adreess1: value })}
                /> 
                <TextInput
                    placeholder="Address Line 2"
                    style={styles.textInput}
                    keyboardType="default"
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={(value) => this.setState({ adreess2: value })}
                /> 

                <View style={{flexDirection:'row' , justifyContent:'space-between' , marginTop:hp('3%')}}>
                    <TextInput
                        placeholder="Pincode"
                        placeholderTextColor={COLORS.medGrey}
                        style={styles.textInputForName}
                        keyboardType='default'
                        autoCorrect={false}
                        selectionColor={COLORS.green}
                        autoCapitalize="none"
                        returnKeyType="done"
                        onChangeText={(fName) => this.setState({ firstName: fName })}
                    />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor={COLORS.medGrey}
                        style={styles.textInputForName}
                        keyboardType="default"
                        autoCorrect={false}
                        selectionColor={COLORS.green}
                        autoCapitalize="none"
                        returnKeyType="done"
                        onChangeText={(lname) => this.setState({ lastName: lname })}
                    />
                </View>
            </View>

            

            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                    style={{
                        backgroundColor: COLORS.black,
                        marginVertical: hp('2%'),
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

export default ChooseLocation;

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
	textInputForName: {
		borderRadius: wp('1.3%'),
		paddingHorizontal: wp('3.5%'),
		width: wp('40%'),
		height: hp('8%'),
        borderWidth:2,
        borderColor:COLORS.lightGrey,
        backgroundColor:COLORS.lightGrey
	},
    map:{
        height:hp('25%'),
        width:wp('90%')
    }
})