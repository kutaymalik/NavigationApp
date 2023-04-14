import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MemberResult = ({route}) => {

    const {user} = route.params;

    return (
        <View>
            <Text style={styles.message}>Sign Up Completed</Text>
            <Text style={styles.label}>Name: {user.userName}</Text>
            <Text style={styles.label}>Surname: {user.userSurname} </Text>
            <Text style={styles.label}>Age: {user.userAge} </Text>
            <Text style={styles.label}>Mail: {user.userMail} </Text>
            <Text style={styles.label}>Country: {user.userHometown} </Text>
        </View>
    )
}

export default MemberResult;

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },

    message:{
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
    }
})