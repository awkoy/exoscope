import React, { Component } from "react";
import { MoreButton, HoldTable, Button } from './../components';

class Holding extends Component { 
    render() {
      return (
        <section className="holding">
            <div className="container">
                <div className="holding__info">
                    <div className="holding__info__self">
                        <div className="holding__info__self__title">Your holdings</div>
                        <div className="holding__info__self__count">$ 7 803.63</div>
                    </div>
                    <div className="holding__info__change">
                        <div className="holding__info__change__title">24H change</div>
                        <div className="holding__info__change__info">
                            <div className="holding__info__change__percent">+2.37%</div>
                            <div className="holding__info__change__count">+$ 184,95</div>
                        </div>
                    </div>
                </div>
                <HoldTable/>
                <div className="holding__settings">
                    <div className="holding__settings__left">
                        <Button names={'btn-orange'} content='+ Add secondary currency'/>
                        <Button content='Edit holdings'/>
                    </div>
                    <div className="holding__settings__right">
                        <Button content='+ Add secondary currency'/>
                    </div>
                </div>
                <MoreButton func={()=>{}} content="Details of your holdings"/>
            </div>
        </section>
      );
    }
  }
  
  export default Holding;