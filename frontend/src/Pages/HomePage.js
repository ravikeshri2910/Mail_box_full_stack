import React from "react";
import SideBar from "../Components/SideBar/sideBar";
import Dashboard from '../Components/Dashboard/Dashboard'
import classes from './HomePage.module.css'

const HomePage = (props) => {

    return <div className={classes.homeDiv}>
        <div className={classes.SideBarDiv}>
            <SideBar />

        </div>
        <div className={classes.DashbordDiv}>

            <Dashboard />
        </div>
    </div>
}

export default HomePage