import React, { useState } from "react";
import { Alert, View } from "react-native";
import Input from '../components/Input'
import Button from "../components/Button/Button";
const MemberSign = ({navigation}) => {

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    const handleSubmit = () => {
        if(!userName || !userSurname || !userAge || !userMail || !userHometown) {
            alert('Bilgiler boş bırakılamaz');
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown
        };
        console.log(user);

        navigation.navigate('MemberResultScreen', {user});
    }


    return (
        <View>
            <Input
                label={'Name'}
                placeholder={'Enter name'}
                onChangeText={(text) => setUserName(text)}
            />
            <Input
                label={'Surname'}
                placeholder={'Enter Surname'}
                onChangeText={setUserSurname}
            />
            <Input
                label={'Age'}
                placeholder={'Enter Age'}
                onChangeText={setUserAge}
            />
            <Input
                label={'E-Mail'}
                placeholder={'Enter e-Mail'}
                onChangeText={setUserMail}
            />
            <Input
                label={'Country'}
                placeholder={'Enter Country'}
                onChangeText={setUserHometown}
            />
            <Button
                text={'Kaydı Tamamla'}
                onPress={handleSubmit}
            />
        </View>
    )
}

export default MemberSign;