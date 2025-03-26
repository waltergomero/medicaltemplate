'use client';

import { useForm } from "react-hook-form";
import SidebarTitle from "../sidebar-title";

const Appointment = () => {
    const { register, handleSubmit, errors } = useForm({ mode: "onBlur",   });

    const onSubmit = (data) => console.log(data);

    return (
        <div className="widget-item">
            <div className="widget-appointment-form">
                <SidebarTitle classOption="title" title="Book An Appointment" />
                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="datepicker"
                                    type="date"
                                    name="date"
                                    placeholder="Date"
                                    required
                                    />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button className="btn btn-theme" type="submit">
                                    Reservation Now
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
