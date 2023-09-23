import One from "../assests/icons/1.png"
import Two from "../assests/icons/2.png"
import Three from "../assests/icons/3.png"
const ListItem = () =>
{
   /* const data =
    {
       title:"Talk to an Expert",
       thumbnail: "thumb.png"
    } */
    return(
        <>
       <div className={"first"}>

        <img src={One} alt="1 img" className={"img"}/>
        <button>
            Talk to a friend
        </button>
        </div>
        <div className={"second"}>
       <img src={Two} alt="2 img" className={"img"}/>
       <button>
            Talk to us
        </button>
        </div>
      <div className={"third"}>
        <img src={Three} alt="3 img" className={"img"}/>
        <button>
            Talk to an expert
        </button>

       </div>
       </>
    )
}

export default ListItem