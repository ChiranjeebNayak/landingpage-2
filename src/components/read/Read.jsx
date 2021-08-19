import React from 'react'
import './read.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
function Read() {
    return (
        <>
            <div className="container">
                <div className="row read">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icons">
                            <FontAwesomeIcon className="icon" icon={faCalendar}></FontAwesomeIcon>
                        </div>
                        <div className="title"><h2>Minimal Design</h2></div>
                        <div className="subtitle">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text
                        </div>
                        <a href="#">Read More ....</a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="icons">
                            <FontAwesomeIcon className="icon" icon={faCalendar}></FontAwesomeIcon>
                        </div>
                        <div className="title"><h2>Minimal Design</h2></div>
                        <div className="subtitle">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text
                        </div>
                        <a href="#">Read More ....</a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="icons">
                            <FontAwesomeIcon className="icon" icon={faCalendar}></FontAwesomeIcon>
                        </div>
                        <div className="title"><h2>Minimal Design</h2></div>
                        <div className="subtitle">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text
                        </div>
                        <a href="#">Read More ....</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read
