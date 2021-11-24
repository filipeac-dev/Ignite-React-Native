import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    Platform,
    TextInput,
    SafeAreaView,
    FlatList
} from 'react-native';
import { Button } from '../componentes/Button';
import { CardSkill } from '../componentes/CardSkill';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGretting('Good Morning!');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good Afternoon!');
        } else {
            setGretting('Good Night!');
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tittle}>
                Welcome, Filipe!
            </Text>

            <Text style={styles.gretting}>
                {gretting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.tittle, { marginTop: 40, fontSize: 20 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <CardSkill skill={item} />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingStart: 30,
        paddingEnd: 30,
    },
    tittle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
    },
    gretting: {
        color: '#fff',
        marginTop: 10
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#EEE',
        fontSize: 18,
        padding: Platform === 'ios' ? 15 : 12,
        marginTop: 30,
        borderRadius: 7
    },
});