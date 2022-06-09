import { View, Text, Image } from 'react-native'
import React from 'react'


const yelpRestaurantInfo = {
    name: "Pho Viet",
    image:  "https://media-cdn.tripadvisor.com/media/photo-s/17/2d/c7/f0/various-dishes-we-offer.jpg",
    price: "$$",
    reviews: "1600",
    rating: 4.8,
    categories: [{title: "Vietnamese"}, {title: "Comfort Food"}],
};

const {name, image , price, reviews, rating, categories} = yelpRestaurantInfo;

const formattedCategories = categories.map((cat)=> cat.title).join(" • ");

const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+) `;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantName title ={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{uri:props.image}} style={{width: "100%", height:  180}}/>
);

const RestaurantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}>{props.description}</Text>
)