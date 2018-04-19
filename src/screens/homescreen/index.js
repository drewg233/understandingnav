import React, { Component } from "react";
import SideBar from "../SideBar/SideBar.js";
import HomeScreen from './HomeScreen.js';
import AboutScreen from './AboutScreen.js';
import Pro from '../profilescreen/index.js';
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    Profile: { screen: Pro }
  },
  {
  	animationEnable: true,
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;