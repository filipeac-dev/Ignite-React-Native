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

interface SkillData {
    id: string;
    name: string;
    data: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
            data: String(new Date().getUTCDate()) + '/' +
                String(new Date().getUTCMonth()) + '/' +
                String(new Date().getUTCFullYear())
        }
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
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

            <Button title="Add new skill" onPress={handleAddNewSkill} />

            <Text style={[styles.tittle, { marginTop: 40, fontSize: 20 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardSkill
                        skill={item.name}
                        data={item.data}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
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
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
});