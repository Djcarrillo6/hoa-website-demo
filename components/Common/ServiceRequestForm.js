import styles from '../../public/css/servicerequest.module.css'

const ServiceRequestForm = () => {
    return (
        <>  
            <div className={styles.container}>
                <p className={styles.title}>Service Request Form</p>
                <div className={styles.form}>
                    <form>
                        <div className={styles.userInfo}>
                            <div className={styles.leftSide}>
                                <p>
                                    <label htmlFor="date">Date</label>
                                    <input type="text" name="date" className={styles.dateInput} />
                                </p>
                                <p>
                                    <label htmlFor="residentName">Resident's Name</label>
                                    <input type="text" name="residentName" className={styles.residentInput} />
                                </p>
                                <p>
                                    <label htmlFor="residentPhone">Resident's Phone Number</label>
                                    <input type="text" name="residentPhone" className={styles.phoneInput} />
                                </p>
                            </div>
                            <div className={styles.rightSide}>
                                <p>
                                    <label htmlFor="assoctiation">Association Name</label>
                                    <input type="text" name="association" className={styles.association} />
                                </p>
                                <p>
                                    <label htmlFor="owner" >Are you the owner?</label>
                                    <p className={styles.checkbox}>
                                        <input type="checkbox" name="owner" value="yes" className={styles.yes} />
                                        <label for="yes" className={styles.selector} >Yes</label>
                                        <input type="checkbox" name="owner" value="no" className={styles.no} />
                                        <label for="no" className={styles.selector} >No</label>
                                    </p>
                                </p>
                                <div className={styles.address} >
                                    <label htmlFor="address">Address or Unit #</label>
                                    <input type="text" name="address" className={styles.addressInput} />
                                    <input type="text" name="address" className={styles.addressInput}/>
                                    <div className={styles.city}>
                                        <input type="text" name="city" className={styles.cityState} />
                                        <input type="text" name="address" className={styles.cityState} />
                                        <input type="text" name="address" className={styles.cityState} />
                                        <div className={styles.cityInput}>
                                            <label htmlFor="city" className={styles.cityInput}>City</label>
                                            <label htmlFor="state"  className={styles.stateInput}>State/Province</label>
                                            <label htmlFor="zip"  className={styles.zipInput}>Zip/Postal</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.leftSide}>
                                <p >
                                    <label htmlFor="contactName">Contact Name</label>
                                    <input type="text" name="contactName" className={styles.contactInput} />
                                </p>
                                <p >
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className={styles.contactInput} />
                                </p>
                            </div>
                            <div className={styles.rightSide}>
                                <p >
                                    <label htmlFor="contactPhone">Contact Phone</label>
                                    <input type="tel" name="contactPhone" className={styles.contactInput} placeholder="(if different)" />
                                </p>
                                <p >
                                    <label htmlFor="timeContact">Best Time to Contact? </label>
                                    <input type="text" name="timeContact" className={styles.contactInput} />
                                </p>
                            </div>
                        </div>
                        <div className={styles.category}>
                            <label htmlFor="requestCatetory">Category of Request</label>
                            <select className={styles.categorySelect}>
                                <option value="General Question" selected>General Question</option>
                                <option value="LandScape Question">LandScape Question</option>
                                <option value="Transponder Question">Transponder Question</option>
                                <option value="Maintenance Item">Maintenance Item</option>
                                <option value="Recreation Question">Recreation Question</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="issue">Describe the Issue</label>
                            <textarea className={styles.description} name="issue" />
                        </div>
                        <input type="submit" value="Submit" className={styles.submit} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ServiceRequestForm;