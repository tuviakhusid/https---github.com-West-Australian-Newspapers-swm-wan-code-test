import { bottomLeftArticleData, bottomMiddleArticleData, bottomRightArticleData, feedArticleData, mainArticleData, topRightArticleData } from "../../dataConstants";
import ArticleComponent from "../../functionalComponents/article/article";
import './news.scss';
export default function News() {
    return (
        <>
        <div className="grid-container">
        <div className="item1"><ArticleComponent {...mainArticleData}/></div>
        <div className="item2"><ArticleComponent {...topRightArticleData}/></div>
        <div className="item3"><ArticleComponent {...bottomLeftArticleData}/></div>  
        <div className="item4">{bottomMiddleArticleData.map((x, index)=><ArticleComponent key={index} {...bottomMiddleArticleData[index]}/>)}</div>
        <div className="item5"><ArticleComponent {...bottomRightArticleData}/></div>
        <div className="item6">{feedArticleData.map((x, index)=><ArticleComponent key={index} {...feedArticleData[index]}/>)}</div>
        </div>
        </>
    )
};