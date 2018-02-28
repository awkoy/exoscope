import React, { Component } from "react";
import { MoreButton } from './../components';

class Events extends Component { 
    render() {
      return (
        <section className="events">
            <div className="container">
                <div className='events__title'>
                    <div className='events__title__date'>Next 7 days events</div>
                    <div className='events__title__count'>3 conferences, 5 events and 2 announcements</div>
                </div>
                <div className="events__today events__container">
                    <div className="events__info">
                        <div className="events__info__name">
                            Today
                        </div>
                        <div className="events__info__date">
                            <span className="orange">Monday</span>
                            19 February 2018
                        </div>
                    </div>
                    <div className="events__item">
                        <div className="events__item__name">
                            Bitcoin 
                        </div>
                        <div className="events__item__info">
                            <div className="events__item__title">
                                <h3 className="events__item__title__content">
                                    Stocks.Exchange Delisting
                                </h3>                                
                                <div className="events__item__title__tags">
                                    Exchange
                                </div>
                            </div>
                            <div className="events__item__content">
                                Stocks.Exchange has announced ANT delisting on 19 February.
                            </div>
                        </div>
                    </div>
                    <div className="events__item">
                        <div className="events__item__name">
                            Ethereum
                        </div>
                        <div className="events__item__info">
                            <div className="events__item__title">
                                <h3 className="events__item__title__content">
                                    Mandatory Hard Fork
                                </h3>                                
                                <div className="events__item__title__tags">
                                    Fork
                                </div>
                            </div>
                            <div className="events__item__content">
                                Mandatory hard-fork to fix difficulty retargeting issue  (v.1.6.0 of the Bitcoin-sCrypt wallet client, which includes Komoto Gravity Well )  takes effect on Feb 19, 2018 (according to Roadmap).
                            </div>
                        </div>
                    </div>
                </div>
                <div className="events__tomorrow events__container">
                    <div className="events__info">
                        <div className="events__info__name">
                            Tomorrow
                        </div>
                        <div className="events__info__date">
                            <span className="orange">Tuesday</span>
                            20 February 2018
                        </div>
                    </div>
                    <div className="events__item">
                        <div className="events__item__name">
                            Bitcoin 
                        </div>
                        <div className="events__item__info">
                            <div className="events__item__title">
                                <h3 className="events__item__title__content">
                                    Stocks.Exchange Delisting
                                </h3>                                
                                <div className="events__item__title__tags">
                                    Exchange
                                </div>
                            </div>
                            <div className="events__item__content">
                                Stocks.Exchange has announced ANT delisting on 19 February.
                            </div>
                        </div>
                    </div>
                    <div className="events__item">
                        <div className="events__item__name">
                            Ethereum
                        </div>
                        <div className="events__item__info">
                            <div className="events__item__title">
                                <h3 className="events__item__title__content">
                                    Mandatory Hard Fork
                                </h3>                                
                                <div className="events__item__title__tags">
                                    Fork
                                </div>
                            </div>
                            <div className="events__item__content">
                                Mandatory hard-fork to fix difficulty retargeting issue  (v.1.6.0 of the Bitcoin-sCrypt wallet client, which includes Komoto Gravity Well )  takes effect on Feb 19, 2018 (according to Roadmap).
                            </div>
                        </div>
                    </div>
                </div>
                <MoreButton func={()=>{}} content="Show all events"/>
            </div>
        </section>
      );
    }
  }
  
  export default Events;