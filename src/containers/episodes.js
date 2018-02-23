import React, { Component } from "react";
import { Episode } from './../components';

class Episodes extends Component {
    constructor(props) {
        super(props);
        this.episodeData = [{
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
    }

    getEpisodes = () => {        
        return this.episodeData.map((el,i) => (i < this.episodeData.length - 2) && <Episode key={i} tag={el.tag} title={el.title} time={el.time} duration={el.duration}/>);
    };
    getLastEpisodes = () => {
        return this.episodeData.map((el,i) => !(i < this.episodeData.length - 2) && <Episode key={i} tag={el.tag} title={el.title} time={el.time} duration={el.duration}/>);
    };

    render() {
      return (
        <section className="episode">
            <div className="container">
                {this.getEpisodes()}
                <div className="episode__last">{this.getLastEpisodes()}</div>
                <div className="episode__add">Ad block</div>
            </div>
        </section>
      );
    }
  }
  
  export default Episodes;