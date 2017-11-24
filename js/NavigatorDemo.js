import React, {Component} from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

class HomeScreen extends Component<{}> {

    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text>Hello, Navigation!</Text>
            <Button
                onPress={() => navigate('Chat', {user: 'Lucy'})}
                title="Chat with Lucy"
            />
        </View>;
    }
}

class ChatScreen extends Component<{}> {


    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

class ProfileScreen extends Component<{}> {

    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20
    }
});


const RootTabs = TabNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                headerTitle: 'Home',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={
                            require('../images/cert0.png')
                        }
                        style={[styles.icon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            },
        },
        Profile: {
            screen: ProfileScreen,
            tabBarLabel: 'Profile',
            navigationOptions: {
                tabBarLabel: 'Profile',
                headerTitle: 'Profile',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={
                            require('../images/cert0.png')
                        }
                        style={[styles.icon, {tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                    />
                ),
                headerTitleStyle: {
                    alignSelf: 'center'
                },
            },
        },
    }
    , {
        animationEnabled: false, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#0F9C00', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
            scrollEnabled: false,
            style: {
                backgroundColor: '#444', // TabBar 背景色
                height: 50
            },
            labelStyle: {
                fontSize: 12, // 文字大小,
                marginTop: 0,
            },
        },
    }
);


const NavigatorDemo = StackNavigator({
        Home: {
            screen: RootTabs,
            navigationOptions: {
                header: null
            }
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                headerTitle: 'Chat',
            }
        }
    }
    , {
        initialRouteName: 'Home'
    });


export default NavigatorDemo;

// export default RootTabs;


//     **********************StackNavigator属性介绍**********************

// navigationOptions：配置StackNavigator的一些属性。
//
// title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用
// header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
// headerTitle：设置导航栏标题，推荐
// headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
// headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"
// headerRight：设置导航条右侧。可以是按钮或者其他视图控件
// headerLeft：设置导航条左侧。可以是按钮或者其他视图控件
// headerStyle：设置导航条的样式。背景色，宽高等
// headerTitleStyle：设置导航栏文字样式
// headerBackTitleStyle：设置导航栏‘返回’文字样式
// headerTintColor：设置导航栏颜色
// headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
// gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭
//
//
// screen：对应界面名称，需要填入import之后的页面
//
// mode：定义跳转风格
//
// card：使用iOS和安卓默认的风格
//
// modal：iOS独有的使屏幕从底部画出。类似iOS的present效果
//
// headerMode：返回上级页面时动画效果
//
// float：iOS默认的效果
//
// screen：滑动过程中，整个页面都会返回
//
// none：无动画
//
// cardStyle：自定义设置跳转效果
//
// transitionConfig： 自定义设置滑动返回的配置
//
// onTransitionStart：当转换动画即将开始时被调用的功能
//
// onTransitionEnd：当转换动画完成，将被调用的功能
//
// path：路由中设置的路径的覆盖映射配置
//
// initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件
//
// initialRouteParams：初始路由参数


//     **********************TabNavigator属性介绍**********************
//screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。
//
//
//     navigationOptions：配置TabNavigator的一些属性
//
// title：标题，会同时设置导航条和标签栏的title
//
// tabBarVisible：是否隐藏标签栏。默认不隐藏(true)
//
// tabBarIcon：设置标签栏的图标。需要给每个都设置
//
// tabBarLabel：设置标签栏的title。推荐
//
// 导航栏配置
//
// tabBarPosition：设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
//
// swipeEnabled：是否允许在标签之间进行滑动
//
// animationEnabled：是否在更改标签时显示动画
//
// lazy：是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
//
// trueinitialRouteName： 设置默认的页面组件
//
// backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
//
// tabBarOptions：配置标签栏的一些属性iOS属性
//
// activeTintColor：label和icon的前景色 活跃状态下
//
// activeBackgroundColor：label和icon的背景色 活跃状态下
//
// inactiveTintColor：label和icon的前景色 不活跃状态下
//
// inactiveBackgroundColor：label和icon的背景色 不活跃状态下
//
// showLabel：是否显示label，默认开启 style：tabbar的样式
//
// labelStyle：label的样式安卓属性
//
// activeTintColor：label和icon的前景色 活跃状态下
//
// inactiveTintColor：label和icon的前景色 不活跃状态下
//
// showIcon：是否显示图标，默认关闭
//
// showLabel：是否显示label，默认开启 style：tabbar的样式
//
// labelStyle：label的样式 upperCaseLabel：是否使标签大写，默认为true
//
// pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）
//
// pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）
//
// scrollEnabled：是否启用可滚动选项卡 tabStyle：tab的样式
//
// indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
//
// labelStyle：label的样式
//
// iconStyle：图标样式