import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Props } from './types'
import { gyroscope, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import { thesaurus } from './pageIndex'

setUpdateIntervalForType(SensorTypes.gyroscope, 250);
interface Card {
    label: string
}

interface Gyroscope {
    x: number
    y: number
    z: number
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

interface Card {
    label:string
}

const ShowContent = (props) => {
    const id = props.navigation.getState().routes[1].params.id
    const cards = thesaurus.find(item => id === item.id).value || []
    const [rotate, setRotate] = useState<Gyroscope>({
        x: 0,
        y: 0,
        z: 0
    })
    const [index, setIndex] = useState(0)
    const [card, setCard] = useState(cards[index])
    const len = cards.length
    const handleChangeIndex = (): void => {
        let tempIndex = index < len - 1 ? index + 1 : len - 1
        setIndex(tempIndex)
        setCard(cards[tempIndex])
    }
    useEffect(() => {
        const subscription = gyroscope.subscribe(({x, y, z}) => {
            if (y < -.7) {
                setRotate({ x, y, z })
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    }, [])
    const useDidUpdateEffect = (fn, inputs) => {
        const [didMount, setDidMount] = useState(false)
        useEffect(() => {
            didMount ? fn() : setDidMount(true)
        }, inputs)
    }
    useDidUpdateEffect(handleChangeIndex, [rotate])
    return (
        <TouchableWithoutFeedback>
            <View style={styles.root}>
                <Text>{`${index + 1}/${len}`}</Text>
                <CardItem label={card} />
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