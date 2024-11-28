import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem (props) {
    return(
        <View style={styles.goalItem}>  
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} android_ripple={{color: '#008fc7'}}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
        
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 2,
        borderColor: '#2d7073',
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#73d5d9',
        borderRadius: 6,
      },
    goalText: {
       color: 'black',
       padding: 8,
    },

});