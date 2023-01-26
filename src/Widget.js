import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./Widget.css"
const Widget = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
        <div className="widget__articleLeft">
            <FiberManualRecordIcon />
        </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("I got it", "Top News of the year")}
      {newsArticle("I got it", "Top News of the year")}
      {newsArticle("I got it", "Top News of the year")}


    </div>
    
  );
};

export default Widget;
