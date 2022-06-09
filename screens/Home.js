import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, {localRestaurants} from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

const YELP_API_KEY = "Mb7X1s_2RlWsAdzEeGJMmRUgO8W8NOzBeECRp7yEcZ2b7RuMtANHb_7tFkpwKVhQuYbctDM4sEGppM6K9tEftsU4Te0jt54nrDEY6yGlQtLMPJa2LF9gkcSRg74iYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState("Austin")
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const yelpURL =
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    }};
 
    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses.filter((business)=>
        business.transactions.includes(activeTab.toLowerCase())
        )));
  };


  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab])

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab ={activeTab} setActiveTab = {setActiveTab}/>
        <SearchBar cityHandler = {setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData = {restaurantData} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs></BottomTabs>
    </SafeAreaView>
  )
}