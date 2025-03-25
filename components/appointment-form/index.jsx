'use client'
import React, { Fragment } from "react";

const AppointmentForm = () => {

    const onSubmit = (data) => console.log(data);
    return (
        <Fragment>
            <form onSubmit={onSubmit} method="POST">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Enter your name..."
                            />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="demo@yourmail.com"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                            />
                          
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group datepicker-group">
                            <label
                                htmlFor="datepicker"
                                className="form-label icon icofont-calendar"
                            >
                                <input
                                    className="form-control"
                                    id="datepicker"
                                    type="date"
                                    name="date"
                                    placeholder="Date"
                                />
                            </label>
                          
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <textarea
                                name="message"
                                rows="7"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <button className="btn btn-theme" type="submit">
                                Make an appointment
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default AppointmentForm;
