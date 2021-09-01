import {useForm} from 'react-hook-form';

const ServiceRequestForm = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const submitRequest = data => {
        data.preventDefault();
        let name = data.residentName;
        let date = data.date;
        let phone = data.residentPhone;
        let association = data.association;
        console.log(name, date, phone, association);
    }
    return (
        <>  
            <div className='container ptb-100'>
                <h1 className='section-title'>Service Request</h1>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit(submitRequest)}>
                        <div className='row'>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="date">Date</label>
                                <input
                                    type="text" 
                                    name="date" 
                                    className='form-control'
                                    {...register('date',
                                        {required: true}
                                    )}
                                />
                            {errors.date?.type == 'required' && <small className='service-errors'>Please enter a date</small>}
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="residentName" className='input-required'>Resident's Name</label>
                                <input 
                                    type="text" 
                                    name="residentName"  
                                    className='form-control'
                                    {...register('residentName', 
                                        {required: true}
                                    )}
                                />
                                {errors.residentName?.type == 'required' && <small className='service-errors'>Please enter your name</small>}
                            </p>
                            <p className='col-lg-6 col-md-12'> 
                                <label htmlFor="residentPhone" className='input-required'>Resident's Phone Number</label>
                                <small> Format: 123-456-7890</small>
                                <input 
                                    type="tel" 
                                    name="residentPhone" 
                                    className='form-control'
                                    {...register('residentPhone',
                                        {required: true,
                                        minLength: 12}
                                    )}
                                />
                                {errors.residentPhone?.type == 'required' && <small className='service-errors'>Please enter your phone number</small>}
                                {errors.residentPhone?.type == 'minLength' && <small className='service-errors'>Please enter a valid phone number</small>}
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="assoctiation" className='input-required'>Association Name</label>
                                <input 
                                    type="text" 
                                    name="association" 
                                    className='form-control input-required'
                                    {...register('association', 
                                        {required: true,
                                        minLength: 5})}
                                />
                                {errors.association?.type == 'minLength' && <small className='service-errors'>Please enter correct association</small>}
                                {errors.association?.type == 'required' && <small className='service-errors'>Please enter an association</small>}
                            </p>
                            <div className='col-lg-6 col-md-12'>
                                <label htmlFor="owner" className='input-required' >Are you the owner?</label>
                                <input 
                                    type="checkbox" 
                                    name="owner" 
                                    value="yes" 
                                    className='checkbox-value' 
                                />
                                <label htmlFor="yes" className='checkbox-label' >Yes</label>
                                <input 
                                    type="checkbox" 
                                    name="owner" 
                                    value="no" 
                                    className='checkbox-value' 
                                />
                                <label htmlFor="no" className='checkbox-label' >No</label>
                            </div>
                        </div>
                        <div className='row' >
                            <p className='col-lg-12'>
                                <label htmlFor="address" className='input-required'>Address or Unit #</label>
                                <input 
                                    type="text"
                                    name="address" 
                                    className='form-control'
                                    {...register('address', 
                                        {required: true}
                                    )}
                                />
                                {errors.address?.type == 'required' && <small className='service-errors'>Please enter an address</small>}
                            </p>
                            <p className='col-lg-12'>
                                <label htmlFor="city" className='input-required'>City</label>
                                <input 
                                    type="text" 
                                    name="city" 
                                    className='form-control'
                                    {...register('city', 
                                        {required: true}
                                    )}
                                />
                                {errors.city?.type == 'required' && <small className='service-errors'>Please enter your city</small>}
                            </p>
                            <p className='col-lg-12'>
                                <label htmlFor="state" className='input-required'>State/Province</label>
                                <input 
                                    type="text" 
                                    name="state" 
                                    className='form-control'
                                    {...register('state', 
                                        {required: true,
                                        minLength: 2,
                                        maxLength: 2}
                                    )}
                                />
                                {errors.state?.type == 'required' && <small className='service-errors'>Please enter your state</small>}
                            </p>
                            <p className='col-lg-12'>
                                <label htmlFor="zip" className='input-required'>Zip/Postal</label>
                                <input 
                                    type="text" 
                                    name="zipCode" 
                                    className='form-control'
                                    {...register('zipCode',
                                        {required: true,
                                        minLength: 5,
                                        maxLength: 5}
                                    )}
                                />
                                {errors.zipCode?.type == 'required' && <small className='service-errors'>Please enter your zip code</small>}
                            </p>
                        </div>
                        <div className='row'>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="contactName" className='input-required'>Contact Name</label>
                                <input 
                                    type="text" 
                                    name="contactName" 
                                    className='form-control'
                                    {...register('contactName',
                                        {required: true,}
                                    )}
                                />
                                {errors.contactName?.type == 'required' && <small className='service-errors'>Please enter a contact</small>}
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="email" className='input-required'>Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    className='form-control'
                                    {...register('email',
                                        {required: true,
                                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
                                    )}
                                />
                                {errors.email?.type == 'required' && <small className='service-errors'>Please enter an email</small>}
                                {errors.email?.type == 'pattern' && <small className='service-errors'>Please enter a valid email</small>}
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="contactPhone">Contact Phone</label>
                                <input 
                                    type="tel" 
                                    name="contactPhone" 
                                    placeholder="(if different)" 
                                    className='form-control'
                                    {...register('contactPhone')}
                                />
                            </p>
                            <p className='col-lg-6 col-md-12'>
                                <label htmlFor="timeContact" className='input-required'>Best Time to Contact? </label>
                                <input 
                                    type="time"
                                    value="08:00" 
                                    name="timeContact" 
                                    className='form-control' 
                                    {...register('timeContact', 
                                        {required: true}
                                    )}
                                />
                                {errors.timeContact?.type == 'required' && <small className='service-errors'>Please enter best time for contact</small>}
                            </p>
                            <p className='col-lg-12'>
                                <label htmlFor="requestCatetory" className='input-required'>Category of Request</label>
                                <select 
                                    className='form-control' 
                                    name='requestCategory' 
                                    defaultValue=''
                                    {...register('requestCategory', 
                                        {required: true}
                                    )}
                                >
                                    <option value="" hidden>Select Below</option>
                                    <option value="General Question">General Question</option>
                                    <option value="LandScape Question">LandScape Question</option>
                                    <option value="Transponder Question">Transponder Question</option>
                                    <option value="Maintenance Item">Maintenance Item</option>
                                    <option value="Recreation Question">Recreation Question</option>
                                </select>
                                {errors.requestCategory?.type == 'required' && <small className='service-errors'>Please select service category</small>}
                            </p>
                            <p className='col-lg-12'>
                                <label htmlFor="serviceDescription" className='input-required'>Describe the Issue</label>
                                <textarea 
                                    id='message' 
                                    rows='10' 
                                    className='form-control' 
                                    name="serviceDescription" 
                                    {...register('serviceDescription', 
                                        {required: true}
                                    )}
                                />
                                {errors.serviceDescription?.type == 'required' && <small className='service-errors'>Please describe issue</small>}
                            </p>
                        </div>
                        <div className= 'row'>
                        </div>
                            <button type='submit' className='col-lg-6 col-md-8 service-button btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ServiceRequestForm;