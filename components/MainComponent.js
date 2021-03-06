import React, {Component} from 'react';
import Menu from "./MenuComponent";
import {Platform, View} from "react-native";
import Dishdetail from "./DishdetailComponent";
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Home from "./HomeComponent";

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);


const HomeNavigator = createStackNavigator({
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const MainNavigator = createDrawerNavigator({
    Home:
        { screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home'
            }
        },
    Menu:
        { screen: MenuNavigator,
            navigationOptions: {
                title: 'Menu',
                drawerLabel: 'Menu'
            },
        }
}, {
    drawerBackgroundColor: '#D1C4E9'
});


export default class Main extends Component {

    render() {

        return (
            <View style={{flex : 1, paddingTop : Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <MainNavigator />
            </View>

        );
    }
}
