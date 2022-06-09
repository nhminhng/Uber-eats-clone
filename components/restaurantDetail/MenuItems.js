import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';


const foods = [
    {
        title: "Pho",
        description: "Vietnamese soup",
        price: "$12",
        image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F26%2F228443-AuthenticPho-mfs-1x1-0483.jpg"
    },
    {
        title: "bun bo hue",
        description: "Spicy Vietnamese soup",
        price: "$15",
        image:
            "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2017/08/Bun-Bo-Hue-46.jpg?resize=1000%2C562"
    },
    {
        title: "banh my",
        description: "Vietnamese sandwich",
        price: "$8",
        image:
            "https://www.thespruceeats.com/thmb/cH_zMFafRIrVgtI4dFTgyp23jLQ=/3000x2000/filters:fill(auto,1)/classic-banh-mi-4844177-hero-01-236ece4af179446888909d052ef61016.jpg"
    }
]


export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index)=>(
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    <FoodInfo food={food}/>
                    <FoodImage food={food}/>
                </View>
                <Divider width={0.5} orientation="vertical"/>
            </View>
        ))}
    </ScrollView>
  );
} 

const styles = StyleSheet.create({
    menuItemStyle :{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle:{
        fontSize: 19,
        fontWeight: "600",
    }
})
const FoodInfo = (props) => (
   <View style={{
       width: 240,
       justifyContent: "space-evenly",
   }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
       <Text>{props.food.description}</Text>
       <Text>{props.food.price}</Text>
   </View>
);

const FoodImage = (props) => (
   <View>
        <Image 
            source ={{uri: props.food.image}}
            style={{width: 100, height: 100, borderRadius: 8}}
        />
   </View>
);