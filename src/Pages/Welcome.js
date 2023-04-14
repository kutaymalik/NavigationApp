import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Button from "../components/Button/Button";

const Welcome = (props) => {

    const goToPage = () => {
        props.navigation.navigate('MemberSignScreen');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Navigation App</Text>
            <Button
            text={'Üye Kaydı Oluştur'}
            onPress={goToPage}
            />
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
    },
})