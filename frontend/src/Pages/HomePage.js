import React from "react";
import SideBar from "../Components/sideBar/sideBar";
import Dashbord from '../Components/Dashbord/Dashbord'
import classes from './HomePage.module.css'

const HomePage = (props) => {

    return <div className={classes.homeDiv}>
        <div className={classes.SideBarDiv}>
            <SideBar />

        </div>
        <div className={classes.DashbordDiv}>

            <Dashbord />
        </div>
    </div>
}

export default HomePage