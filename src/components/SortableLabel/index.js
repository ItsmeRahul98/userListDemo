import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import SortIcon from '../../assests/images/sorting.png';


const SortableLabel = (props) => {
    let {label,onClick,width} = props

    return (
        <TouchableOpacity style={styles.btnStyle} onPress={() =>{
           onClick()}}>
          <Text style={{fontWeight:'600'}}>{label}</Text>
            <Image source={require('../../assests/images/sorting.png')} style={{height:15,width:15,marginLeft:5}}/>
        </TouchableOpacity>
    )
}

export default SortableLabel;