import React, {Component} from 'react';
import {ListItem} from "react-native-elements";
import {FlatList} from "react-native";
import {DISHES} from "../shared/dishes";


export default class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title : "Menu"
    }


    render() {
        const {navigate} = this.props.navigation;

        const RenderMenuItem = ({item, index}) => {

            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', {dishId : item.id})}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.dishes}
                renderItem={RenderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}