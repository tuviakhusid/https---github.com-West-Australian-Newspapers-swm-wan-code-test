import { articleType, IInputBase } from "../../interfaces"

const ArticleComponent: React.FC<IInputBase> = ({ ...props }) => {
  let articleLayout;
  switch (props.type) {
    case articleType.Main:
      articleLayout = (<>
        <div className="subItem" style={{ width: props.width }}>
          <div className="header-content">
            <div className="header">{props.header}</div>
            <div className="content">{props.content}</div>
          </div>
          <div className="author">{props.author}</div>
        </div>
        <div>
          <img src={`assets/${props.image}`} style={{ width: props.width }} alt="main head"/>
        </div>
      </>)
      break;
    case articleType.Secondary:
      articleLayout = (<>
      <div className="secondary">
        {props.image&&<img src={`assets/${props.image}`} style={{ width: props.width }} alt="secondary head"/>}
        <div>
            {props.header&&<div className="small-title">{props.header}</div>}
            {props.content&&<div className="content">{props.content}</div>}
        </div>
        </div>
        {props.author&&<div className="author">{props.author}</div>}
      </>)
      break;
  }
  return (<>
    {articleLayout}
  </>)
};
export default ArticleComponent;