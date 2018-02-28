import React, { Component } from "react";
import { MoreButton, HoldTable } from './../components';

class Market extends Component { 
    render() {
      return (
        <section className="market">
            <div className="container">
                <div className="market__info">  
                    <div className="market__info__cap">
                        <div className="market__info__cap__title">
                            Cryptomarket capitalisation
                        </div>
                        <div className="market__info__cap__count">
                            $ 815.9 B
                        </div>
                    </div>
                    <div className="market__info__vol">
                        <div className="market__info__vol__title">
                            24H volume
                        </div>
                        <div className="market__info__vol__count">
                            $ 45.9 B
                        </div>
                    </div>
                    <div className="market__info__dom">
                        <div className="market__info__dom__title">
                            BTC dominance
                        </div>
                        <div className="market__info__dom__count">
                            34.9%
                        </div>
                    </div>
                </div>
                <HoldTable/> 
                <MoreButton func={()=>{}} content="View all coins"/>
            </div>
        </section>
      );
    }
  }
  
  export default Market;