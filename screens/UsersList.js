import React, { useEffect, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import firebase from '../database/firebase';
import { ListItem, Avatar } from 'react-native-elements'


export const UsersList = (props) => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection("users").onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.docs.forEach((doc) => {
            const { name, email, phone } = doc.data();
            users.push({
                id: doc.id,
                name,
                email,
                phone,
            });
            });
            setUsers(users);
        });
    }, []);
    
    return (
        <ScrollView>
            <Button 
            title="Create user" 
            onPress={ () => props.navigation.navigate('CreateUserScreen')}/>
        
            {
            user.map(user => {
                return (
                    <ListItem
                    key={ user.id }
                    >
                        <ListItem.Chevron />
                        <ListItem.content>
                            <ListItem.Title>
                                {user.name}
                            </ListItem.Title>
                        </ListItem.content>
                    </ListItem>
                )
            })
            }

        </ScrollView>
            ) 
}

export default UsersList