import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems'

const YELP_API_KEY = "Mb7X1s_2RlWsAdzEeGJMmRUgO8W8NOzBeECRp7yEcZ2b7RuMtANHb_7tFkpwKVhQuYbctDM4sEGppM6K9tEftsU4Te0jt54nrDEY6yGlQtLMPJa2LF9gkcSRg74iYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState("Austin")

  const getRestaurantFromYelp = () => {
    const yelpURL =
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    }};
 
    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };


  useEffect(() => {
    getRestaurantFromYelp();
  }, [city])
  
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs/>
        <SearchBar cityHandler = {setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData = {restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}