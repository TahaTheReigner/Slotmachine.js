"use strict";

const iconWidth = 79, 
    iconHeight = 79 , 
    numIcons = 9,
    indexes = [0 , 0 , 0 ];



const roll = (reel , offset = 0 ) => {

    const delta = (offset + 2 )* numIcons +Math.round(Math.random() * numIcons );};