import { StatusBar } from 'expo-status-bar';   // helps us adjust the settings for seeing time battery etc.
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView,  // could have performance issue as it renders all child components 
  FlatList,  // better than scrollview as it render only visible components
} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
// button has no style 
// css is not present so child components do not inherit styling properties of parent

export default function App() { 
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler (){
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
      if(enteredGoalText!=''){
          const goalObject = {text: enteredGoalText, id: Math.random().toString()};
          setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalObject]);
          //setModalIsVisible(false);
      }
  }
  function addGoalCancelHandler(){
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);  // if true then those items are kept all false ones are removed
    });
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>  
        <View style={styles.button}> 
          <Button title='Add New Goal' color="#0d3f42" onPress={startAddGoalHandler}  />
        </View>  
        {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancelGoal={addGoalCancelHandler} />}
        <View style={styles.goalsContainer}>
          <Text style={styles.goalHeading} >Current Goals</Text>
          <FlatList 
            data={courseGoals} 
            renderItem = {(itemData) => {
              return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>;
            }}  
            keyExtractor={(item, index) => {
              return item.id;
            }}
            style={styles.scrollBar}  
            alwaysBounceVertical={false} 
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#e0e0c5'
  },
  goalsContainer: {
    flex: 6,
    borderWidth: 2,
    marginBottom: 16,
    //justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#afebed',
    borderRadius: 6,
  },
  goalHeading:{
    justifyContent:'center',
    borderBottomWidth: 2,
    paddingHorizontal: '35%',
    paddingVertical: 8,
    marginBottom: 8,
    backgroundColor: '#4fbde8',
  },
  scrollBar: {
    opacity: 1,
  },
  button: {
    borderWidth:2,
    borderRadius: 6,
  },
});
