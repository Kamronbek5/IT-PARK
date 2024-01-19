import Cup from "../../../assets/icons/cup"
import Planet from "../../../assets/icons/planet"
import Puzzle from "../../../assets/icons/puzzle"
import Reading from "../../../assets/icons/reading"
import Skill from "../../../assets/icons/skill"

const Profileft = () => {
  return (
    <div className="profileft">
        <div className="profileft__top">
            <div className="profileft__top__icon"></div>
            <h1 className="profileft__top__title">Kamronbek Yusubboev</h1>
            <p className="profileft__top__text">Frontend developer</p>
            <div className="profileft__top__skills">
                <div className="profileft__top__icons">
                    <h1 className="profileft__top__iconname">iCoins</h1>
                    <p className="profileft__top__iconn">2300</p>
                </div>
                <div className="profileft__top__sert">
                    <h1 className="profileft__top__sertname">Sertifikatlar</h1>
                    <p className="profileft__top__sertn">50</p>
                </div>
            </div>
        </div>
        <div className="profileft__bottom">
            <h1 className="profileft__bottom__title">Achievements</h1>
            <div className="profileft__bottom__icons">
                <i className="profileft__bottom__icon"><Cup/></i>
                <i className="profileft__bottom__icon"><Puzzle/></i>
                <i className="profileft__bottom__icon"><Planet/></i>
                <i className="profileft__bottom__icon"><Skill/></i>
                <i className="profileft__bottom__icon"><Reading/></i>
            </div>
            <h1 className="profileft__bottom__title2">Bio</h1>
            <div className="profileft__bottom__texts">
                <p className="profileft__bottom__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
  )
}

export default Profileft