import React, { useEffect,useState }  from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import SortableLabel from '../SortableLabel/index'
import axios from 'axios';

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    
    const [value, setValue] = useState('');

      useEffect(() => {
       getUserList()
     }, []);

     const getUserList = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setData(result.data);
     }

     const onSort = (ref) => {
      let temp = data.sort((a,b) => (a[ref] > b[ref]) ? 1 : ((b[ref] > a[ref]) ? -1 : 0))
      setData(JSON.parse(JSON.stringify(temp)))
     }
     const onSearch = (txt) => {
       txt.length === 0 ? setIsFiltered(false) : setIsFiltered(true)
      setValue(txt)
      let filteredData = data.filter(function (item) {
        return item.name.includes(txt);
      });
    
      setFilteredData(JSON.parse(JSON.stringify(filteredData)))
    }

    let finalData = isFiltered ? filteredData : data

    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.pageTitle}>Users List</Text>
                <View style={styles.searchBar}> 
                <TextInput
                  style={styles.TextInput}
                  onChangeText={text => onSearch(text)}
                  value={value}
                  placeholder="Search Users"
                />
                </View>
                <ScrollView>
                <ScrollView horizontal={true} contentContainerStyle={{flexDirection:'column'}}>
                  <View style={{flexDirection:'row',height:50}}>
                      <SortableLabel label="Id" onClick={()=>{
                        onSort("id")
                      }}/>
                      <SortableLabel label="Name" onClick={()=>{
                        onSort("name")
                      }}/>
                      <SortableLabel label="User Name" onClick={()=>{
                        onSort("username")
                      }}/>
                      <SortableLabel label="Email" onClick={()=>{
                        onSort('email')
                      }}/>
                      <SortableLabel label="Address" onClick={()=>{
                        onSort('address')
                      }}/>
                      <SortableLabel label="phone" onClick={()=>{
                        onSort("phone")
                      }}/>
                      <SortableLabel label="website" onClick={()=>{
                        onSort("website")
                      }}/>
                      <SortableLabel label="company" onClick={()=>{
                        onSort("company")
                      }}/>
                  </View>
                  <ScrollView horizontal={true} contentContainerStyle={{flexDirection:'column'}} >
                    {
                      finalData.map((d) => {
                        return  <View style={{flexDirection:'row'}}>
                           <Text style={styles.columnDesign}>{d.id}</Text>
                          <Text style={styles.columnDesign}>{d.name}</Text>
                          <Text style={styles.columnDesign}>{d.username}</Text>
                          <Text style={styles.columnDesign}>{d.email}</Text>
                          <Text style={styles.columnDesign}>{d.address.street},{d.address.suite},{d.address.city},{d.address.zipcode}</Text>
                          <Text style={styles.columnDesign}>{d.phone}</Text>
                          <Text style={styles.columnDesign}>{d.website}</Text>
                          <Text style={styles.columnDesign}>{d.company.name}</Text>
                        </View>
                      })
                    }
               
                  </ScrollView>
                </ScrollView>
                </ScrollView>
                
         </SafeAreaView>
    
    )
}

export default TableComponent;