import axios from "axios";
import {props} from "../config.js"


export default axios.create({
 baseURL: props.api_url
});