import  express  from "express";
import * as RoomController from '../controllers/roomController.js'
 
const route = express.Router();

route.route("/create").post(RoomController.createRoom)
route.route("/rooms").post(RoomController.getRoom)

 



 


export default route;