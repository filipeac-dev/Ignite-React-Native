import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardsProps extends TouchableOpacityProps {
    skill: string,
    data: string
}

export function CardSkill({ skill, data, ...rest }: SkillCardsProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
                {"\n"}
                {data}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 10,
        borderRadius: 22,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: "center",
        lineHeight: 24
    }
});