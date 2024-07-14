import data from '../src/assets/data/news.json';
import { IInputBase, articleType } from "./interfaces";
const dataNews=data.articles;
console.log(dataNews)
export const mainArticleData: IInputBase = {
    author: dataNews[0].byline.text,
    header: dataNews[0].head,
    id: dataNews[0].id,
    image: dataNews[0].image,
    type: articleType.Main,
    content: dataNews[0].teaser,
    width: '100%'
};
export const topRightArticleData: IInputBase = {
    author: dataNews[1].byline.text,
    header: dataNews[1].head,
    id: dataNews[1].id,
    image: dataNews[1].image,
    type: articleType.Secondary,
    width: '100%'
};
export const bottomLeftArticleData: IInputBase = {
    author: dataNews[2].byline.text,
    header: dataNews[2].head,
    id: dataNews[2].id,
    image: dataNews[2].image,
    type: articleType.Secondary,
    content: dataNews[2].teaser,
    width: '100%'
};
export const bottomMiddleArticleData: IInputBase[] =[ 
{
    author: dataNews[3].byline.text,
    header: dataNews[3].head,
    id: dataNews[3].id,
    type: articleType.Secondary,
    content: dataNews[3].teaser
},
{
    author: dataNews[4].byline.text,
    header: dataNews[4].head,
    id: dataNews[4].id,
    type: articleType.Secondary,
    content: dataNews[4].teaser
}];
export const bottomRightArticleData: IInputBase = {
    author: dataNews[5].byline.text,
    header: dataNews[5].head,
    id: dataNews[5].id,
    image: dataNews[5].image,
    type: articleType.Secondary,
    content: dataNews[5].teaser,
    width: '100%'
};

export const feedArticleData: IInputBase[] = [
    {
        header: dataNews[6].head,
        id: dataNews[6].id,
        type: articleType.Secondary
    },
    {
        header: dataNews[7].head,
        id: dataNews[7].id,
        type: articleType.Secondary
    },
    {
        header: dataNews[8].head,
        id: dataNews[8].id,
        type: articleType.Secondary
    },
    {
        header: dataNews[9].head,
        id: dataNews[9].id,
        type: articleType.Secondary
    },
    {
        header: dataNews[10].head,
        id: dataNews[10].id,
        type: articleType.Secondary
    }
];