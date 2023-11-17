import TxtService from "../Components/Imagines/TxtService.png";
import "../Screens/Css/technicalService.css";

function TechnicalService() {
  return (
    <div>
      <div className="flex">
        <div className="w-3/4 p-4 ">
          <img src={TxtService} alt="TxtGames" className="photoService" />
          <div className="flex flex-wrap justify-start" id="CardConsole"></div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalService;
