import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Props } from './types'

interface Card {
    label: string
}

const CardItem: React.FC<Card> = ({label}) => {
    return (
        <View>
            <Text style={styles.textStyle}>
                {label}
            </Text>
        </View>
    )
}
const cards: Card[] = [
    {
        label: '洛洛历险记'
    },
    {
        label: '哪吒'
    },
    {
        label: '豆腐'
    },
    {
        label: '万万没想到'
    }
]

interface Card {
    label:string
}

const ShowContent: React.FC<Props> = ({navigation}) => {
    const [card, setCard] = useState(cards[0])
    const [index, setIndex] = useState(0)
    const len = cards.length
    const handleTouch = (): void => {
        if (index < len) {
            setCard({
                label: cards[index].label
            })
            setIndex(index + 1)
        }else {
            setIndex(0)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => handleTouch()}>
            <View style={styles.root}>
                <CardItem label={card.label} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    textStyle: {
        fontSize: 30
    }
})

export default ShowContent