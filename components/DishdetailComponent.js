import React from 'react';
import {Card, Text} from "react-native-elements";
import {View} from "react-native";
function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return(
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}

export default Dishdetail;