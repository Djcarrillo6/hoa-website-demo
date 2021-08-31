import styles from '../../public/css/servicerequest.module.css'

const ServiceRequestForm = () => {
    return (
        <>  
            <div className='container contact-area ptb-100'>
                <h2 className='section-title'>Service Request Form</h2>
                <div className='contact-form'>
                    <form id='contactForm'>
                        <div className='row'>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="date">Date</label>
                                <input type="text" name="date" className='form-control' />
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="residentName">Resident's Name</label>
                                <input type="text" name="residentName"  className='form-control'/>
                            </p>
                            <p className='col-lg-6 col-md-12'> 
                                <label htmlFor="residentPhone">Resident's Phone Number</label>
                                <input type="text" name="residentPhone" className='form-control' />
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="assoctiation">Association Name</label>
                                <input type="text" name="association" className='form-control' />
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="owner" >Are you the owner?</label>
                                <p className={styles.checkbox}>
                                    <input type="checkbox" name="owner" value="yes" className={styles.yes} />
                                    <label htmlFor="yes" className={styles.selector} >Yes</label>
                                    <input type="checkbox" name="owner" value="no" className={styles.no} />
                                    <label htmlFor="no" className={styles.selector} >No</label>
                                </p>
                            </p>
                        </div>
                        <div className='row' >
                            <p className='col-lg-12'>
                                <label htmlFor="address">Address or Unit #</label>
                                <input type="text" name="address" className='form-control' />
                            </p>
                            <div className='col-lg-12'>
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" className='form-control' />
                                <label htmlFor="state" >State/Province</label>
                                <input type="text" name="address" className='form-control' />
                                <label htmlFor="zip" >Zip/Postal</label>
                                <input type="text" name="address" className='form-control' />
                            </div>
                        </div>
                        <div className='row'>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="contactName">Contact Name</label>
                                <input type="text" name="contactName" className='form-control'/>
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email"  className='form-control'/>
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="contactPhone">Contact Phone</label>
                                <input type="tel" name="contactPhone" placeholder="(if different)" className='form-control'/>
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="timeContact">Best Time to Contact? </label>
                                <input type="text" name="timeContact" className='form-control'/>
                            </p>
                        </div>
                        <div className= 'row'>
                            <label htmlFor="requestCatetory">Category of Request</label>
                            <select className='col-lg-12 form-control'>
                                <option value="General Question" selected>General Question</option>
                                <option value="LandScape Question">LandScape Question</option>
                                <option value="Transponder Question">Transponder Question</option>
                                <option value="Maintenance Item">Maintenance Item</option>
                                <option value="Recreation Question">Recreation Question</option>
                            </select>
                            <label htmlFor="issue">Describe the Issue</label>
                            <textarea id='message' className='col-lg-12 text-center form-control' name="issue" />
                        </div>
                        <button type='submit' className='col-md-4 btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ServiceRequestForm;