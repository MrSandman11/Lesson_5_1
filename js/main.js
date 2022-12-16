'use strict';

const spam = document.querySelector('.ads');
const propsItems = document.querySelectorAll('.item');
const propsItemFourInTwo =
document.querySelector('.item_two .props__item_four');
const propsItemFour = document.querySelectorAll('.item_four .props__item_four');
const propsList = document.querySelectorAll('.props__list');
const titleTwoInFive = document.querySelector('.item_five .item__title');
const titleSixInTwo = document.querySelector('.item_two .item__title');
const titleFiveInSix = document.querySelector('.item_six .item__title');
const titleThree = document.querySelector('.item_three .item__title');
const propsItemsTwoInSix =
document.querySelectorAll('.item_six .props__item_two');

spam.remove();
propsItems[4].before(propsItems[0]);
propsItemFour[3].before(propsItemFourInTwo);
titleSixInTwo.replaceWith(titleTwoInFive);
propsList[4].before(titleFiveInSix);
propsList[5].before(titleSixInTwo);
propsList[4].replaceWith(propsList[3]);
titleThree.after(propsList[4]);
propsList[2].append(propsItemsTwoInSix[0], propsItemsTwoInSix[1]);
