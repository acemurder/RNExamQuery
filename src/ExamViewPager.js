import React, {Component} from 'react';


import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Picker,
    ViewPagerAndroid,
    ToolbarAndroid,
    StatusBar
} from 'react-native';

import ExamScheduleView from "./ExamScheduleView";

import LinearGradient from 'react-native-linear-gradient';


export default class ExamViewPager extends Component {
    render() {
        return (
            <View style={styles.back}>
                <StatusBar
                    translucent={true}
                    animated={true}    />
                <LinearGradient colors={['#798DFA', '#58B1FC']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        考试与成绩
                    </Text>
                </LinearGradient>
                <ViewPagerAndroid style={styles.pageStyle} initialPage={0}>
                    <View>
                        <ExamScheduleView/>
                    </View>
                    <View>
                        <ExamScheduleView/>
                    </View>
                    <View>
                        <ExamScheduleView/>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        height: 68,
        paddingTop: 20
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,  //定义了flex属性标示当前的属性的可伸缩的
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1280,
    },
    style_bottom: {
        flex: 1,
        flexDirection: 'row',//代表一行
        alignItems: 'flex-end',//在底部
        bottom: 10,//距离底部10
    },
    style_longin: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        alignItems: 'center',//内部控件居中
        justifyContent: 'center',//子控件位于父容器的居中
    },
    style_userinput: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: 35,
        textAlign: "center"
    },
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    style_view_unlogin: {
        fontSize: 12,
        color: '#63B8FF',
        marginLeft: 10,
    },
    style_view_register: {
        fontSize: 12,
        color: '#63B8FF',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        textAlign: 'right',//文字靠右
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
        flex: 1
    },
    back: {
        flex: 1,
        flexDirection: "column"
    }

});
