import React  from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import TableComponent from '../../components/TableComponent';


const Userslist = ({  }) => {
    return (
        <View style={styles.container}>
            <TableComponent/>
        </View>
    )
}

export default Userslist;