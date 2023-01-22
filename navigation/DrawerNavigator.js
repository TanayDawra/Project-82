import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
const DrawerNavigator = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <DrawerNavigator>
        <Drawer.Screen name = "Home" component = {TabNavigator}/>
        <Drawer.Screen name = "Profile" component = {Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;