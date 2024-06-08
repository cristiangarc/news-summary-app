import React, {useState} from "react";
import axios from "axios"
import { getNYTArticles } from "./components/fetch";


function Homepage () {
    getNYTArticles('Automobiles')
}


export default Homepage;
