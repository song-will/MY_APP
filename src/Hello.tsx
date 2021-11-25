// components/Hello.tsx
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {
    name: string
    enthusiasmLevel?: number
}

const Hello: React.FC<Props> = (props) => {
    const [enthusiasmLevel, setEnthusiasmLevel] = useState(props.enthusiasmLevel)
    const onIncrement = ():void => {
        setEnthusiasmLevel((enthusiasmLevel || 0) + 1)
    }
    const onDecrement = ():void => {
        setEnthusiasmLevel((enthusiasmLevel || 0) - 1)
    }
    const getExclamationMarks = (numChars: number):string => {
        return Array(numChars + 1).join('!')
    }
    return (
        <View style={styles.root}>
            <Text style={styles.greeting}>
                Hello(' ')
                {props.name + getExclamationMarks((enthusiasmLevel || 0) > 0 ? (enthusiasmLevel || 0) : 0)}
            </Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="-" onPress={onDecrement} color="red" accessibilityLabel="decrement" />
                </View>
                <View style={styles.button}>
                    <Button title="+" onPress={onIncrement} color="blue" accessibilityLabel="increment" />
                </View>
            </View>
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold'
    }
});

export default Hello;