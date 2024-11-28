import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your Course Goal' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainerObject}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#046b03' />
                    </View>
                    <View style={styles.button}> 
                        <Button title='Cancel' onPress={props.onCancelGoal} color='#8f4257'/>
                    </View>                    
                </View>
                
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 16,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: 'green',
        backgroundColor: '#abf7bf',
        //padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#022e0e',
        width: '77%',
        //marginRight: 8,
        padding: 8,
        backgroundColor: '#57d98d',
    },
    buttonContainerObject: {
        flexDirection: 'row',
        paddingVertical: 32,
        paddingHorizontal: 16,
        alignContent: 'space-between',
        marginHorizontal: 16,
        //backgroundColor: '#22945f'
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        //backgroundColor: 'black'
    },
});