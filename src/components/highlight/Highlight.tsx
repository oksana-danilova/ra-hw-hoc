/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Highlight.css';

function Highlight(_props: any) {
  const [list, _setList] = useState([
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        views: 50
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        views: 12
    },
    {
        type: 'article',
        title: 'Невероятные события в неизвестном поселке...',
        views: 175
    },
    {
        type: 'article',
        title: 'Секретные данные были раскрыты!',
        views: 1532
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        views: 4253
    },
    {
        type: 'article',
        title: 'Кот Бегемот обладает невероятной...',
        views: 12,
    },
  ]);

  function New(props: any) {    
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
  }

  function Popular(props: any) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
  }

  function ListWrapper(func: Function) {
    return (props: {list: listItem[]}) => {
      const newList = func(props);
      return(
        <>
          {newList.map((el: {props: listItem}) => {
            if(el.props.views < 1000) {
              return <New children={el} key={uuidv4()} />;
            } else {
              return <Popular children={el} key={uuidv4()} />;
            }
          })}
        </>
      )
    }
  }

  function Article(props: listItem) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
  }

  function Video(props: listItem) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
  }

  function List(props: {list: listItem[]}) {
    return props.list.map((item: listItem) => {
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} key={uuidv4()} />
                );

            case 'article':
                return (
                    <Article {...item} key={uuidv4()}/>
                );
        }
    });
  }

  type listItem = {
    type: string
    views: number
    title?: string    
    url?: string
  }  

  const NewList = ListWrapper(List);

  return (
    <div className="container__highlight">
      <NewList list={list} />
    </div>    
  );
}

export default Highlight;