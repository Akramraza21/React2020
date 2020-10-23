import React,{useEffect,useState} from 'react';
import classes from "./app.module.css"
import './App.css';
import axios from 'axios';

function App() {
  const [show,setShow] = useState(false)
  const [fb,setFb] = useState(false)
  const [tw,setTw] = useState(false)
  const [yt,setYt] = useState(false)
  const [rd,setRd] = useState(false)
  const [arrow,setArrow] = useState(false)
  const [data,setData] = useState("")

  let sourceHandler = () => {
    setShow(true)
  }
  let teamHandler =  () => {
    setShow(false)
    setArrow(false)
  }
  const fbClicked = () => {
    let  data = fb
    setFb(!data)
  }
   const twClicked = () => {
    let  data = tw
    setTw(!data)
  }
   const ytClicked = () => {
    let  data = yt
    setYt(!data)
  }
   const rdClicked = () => {
    let  data = rd
    setRd(!data)
  }
  const arrowChange = () =>{
    let data = arrow
    setArrow(!data)
  }

    // useEffect(() => {
    //   let item =  data
    //   console.log(data);
    //   axios.get("52.175.201.248:3000/facebook/facebook_post_comments/${}")
    //   .then(resp=>setData(resp))
    //   .catch(error=>console.log(error))
    //   return item
    // }, [])

  const selectedItems = [fb,tw,yt,rd]
  const imagesAre = ["fb.webp",'twitter.webp','yt.webp','reddit.webp']
  return (<React.Fragment>

    <div className={classes.outter}>
     <button className={classes.button} onClick={sourceHandler} >
     MANAGE SOURCES
     </button>
     <button className={classes.button} onClick={teamHandler}>
       MANAGE TEAM
     </button>
    </div>
    <div className={classes.dImage}>
      {arrow? selectedItems.map((item,index)=> item?<div key={index} className={classes.imageDiv} > <img  className={classes.image} src={require(`./assets/${imagesAre[index]}`)} alt={imagesAre[index]} /> <br /> <br />
      <span>username</span> <div><span>Uniceff</span>  <span>AlpuraCheese</span></div> </div> :null  ):null}
      </div>
    <div>
      {show?<div>
      <label> <input onClick={()=>fbClicked()} type="checkbox"  value="Box 1"/> <img className={classes.image} src={require('./assets/fb.webp')} alt="facebook" /> </label> <br/><br/>
      <label> <input onClick={()=>twClicked()} type="checkbox" value="Box 2" /> <img className={classes.image} src={require('./assets/twitter.webp')} alt="twitter" /> </label> <br/> <br/>
      <label> <input onClick={()=>ytClicked()} type="checkbox" value="Box 3" /> <img className={classes.image} src={require('./assets/yt.webp')} alt="youtube" /> </label> <br /> <br/>
      <label> <input onClick={()=>rdClicked()} type="checkbox" value="Box 4" /> <img className={classes.image} src={require('./assets/reddit.webp')} alt="reddit" /> </label>
      <div className={classes.arrow} onClick={()=>arrowChange()}></div> 
      </div> :null}
      
    </div>
  </React.Fragment>
  );
}

export default App;
