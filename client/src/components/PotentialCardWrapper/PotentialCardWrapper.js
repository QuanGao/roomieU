import React from "react";
import Slider from "react-slick";
import "./PotentialCardWrapper.css";
import PotentialRoommateCard from "../PotentialRoommateCard";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    };

const PotentialCardWrapper = props => {
  return ( 
    <Slider {...settings}> 
        {props.potentialRoommates.map((user, i) => {
        return <PotentialRoommateCard
                key={i}
                photo={user.photo}
                name={user.name}
                school={user.school}
                bio={user.bio}
                id={user._id}
                handleClick={props.handleClick}
            />
        })} 
    </Slider>  
  );
};

export default PotentialCardWrapper;
