import Cooking from "../images/cooking.png";
import Fridge from "../images/fridge.png";
import Profits from "../images/profits.png";

export default function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutCooking">
                <div className="header">
                    <img className="png" src={Cooking} alt=""></img>
                    <h className="caption">Learn to cook!</h>
                </div>
                <p className="paragraph">Do you ever have leftover food in the fridge? Want to impress your friends and family? Pick up
                    a new skill. Make your favorite foods and try new things. Food tastes best when you make it!
                </p>
            </div>  
            <div className="aboutFridge">
                <div className="header">
                        <img className="png" src={Fridge} alt=""></img>
                        <h className="caption">Don't waste, use everything!</h>
                </div>
                <p className="paragraph">Food should never be wasted. There is a purpose for every item in your fridge. If the 
                expiration date is approaching, make something with it!
                </p>
            </div>  
            <div className="aboutProfits">
            <div className="header">
                    <img className="png" src={Profits} alt=""></img>
                    <h className="caption">Learn to cook!</h>
                </div>
                <p className="paragraph">Inflation is no joke! Stop spending money outside and make your own delicious meals. Fresh 
                ingredients from your fridge can beat any restaurant. Think of all the money you will save!
                </p>
            </div>  
        </div>
    );
}