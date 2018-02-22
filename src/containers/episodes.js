import React, { Component } from "react";
import { Episode } from './../components';

class Episodes extends Component {
    getEpisodes = () => {
        const episodeData = [{
            tag: 'Tag name',
            title: 'Title episode',
            time: '10 min ago',
            duration: '2 day'
        },
        {
            tag: 'Tag name',
            title: 'Title episode',
            time: '10 min ago',
            duration: '2 day'
        },
        {
            tag: 'Tag name',
            title: 'Title episode',
            time: '10 min ago',
            duration: '2 day'
        },
        {
            tag: 'Tag name',
            title: 'Title episode',
            time: '10 min ago',
            duration: '2 day'
        },
        {
            tag: 'Tag name',
            title: 'Title episode',
            time: '10 min ago',
            duration: '2 day'
        }];
        return episodeData.map((el,i) => <Episode key={i} tag={el.tag} title={el.title} time={el.time} duration={el.duration}/>);
    };

    render() {
      return (
        <section className="episodes">
            <div className="container">
                {this.getEpisodes()}
            </div>
        </section>
      );
    }
  }
  
  export default Episodes;