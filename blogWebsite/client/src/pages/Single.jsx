import React from "react";
import edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";


const Single = () =>{
    return(
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="info">
                        <span>Saad</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write`}>
                        <img src={edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam tempore eum nesciunt expedita maxime ipsum? Culpa optio dignissimos iure at
                    commodi suscipit cupiditate, enim adipisci velit deleniti sint consectetur temporibus hic!
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque, ex corporis nesciunt natus numquam minus nostrum sequi atque, illo veritatis fuga debitis praesentium.
                        adipisicing elit. Molestias quos, ratione quis totam dolores deleniti enim culpa eveniet placeat repellendus provident harum ipsa quibusdam. Recusandae aut quasi quibusdam! Soluta, mollitia.
                    </p>
                </p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single;