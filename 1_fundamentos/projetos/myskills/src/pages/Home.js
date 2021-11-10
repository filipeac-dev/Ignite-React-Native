import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Button } from '../componentes/Button';
import { CardSkill } from '../componentes/CardSkill';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>
                Welcome, Filipe!
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button />

            <Text style={[styles.tittle, { marginTop: 20 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <CardSkill />
                ))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    tittle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#EEE',
        fontSize: 18,
        padding: Platform === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
});