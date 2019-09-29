import React from 'react';
import {ListItem} from "react-native-elements";
import {FlatList} from "react-native";


export default function Menu(props) {

    const RenderMenuItem = ({item, index}) => {

        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/uthappizza.png')}}
            />
        );
    };

    return (
        <FlatList
            data={props.dishes}
            renderItem={RenderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}