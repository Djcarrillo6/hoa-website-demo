const RequestForm = () => {
    return (
        <>
            <h1 className="text-center ptb-100">Service Request</h1>
            <div className='container'>
                <form class='contact-form'>
                    <div className='row'>
                        <p className='col-lg-12'>
                            <label htmlFor='date'>Date:</label>
                            <input type='text' name='date' />
                        </p>
                        <p className='col-lg-12'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' />
                        </p>
                        <p className='col-lg-12'>
                            <label htmlFor='number'>Number:</label>
                            <input type='text' name='number' />
                        </p>
                        <p className='col-lg-12'>
                            <label htmlFor='association'>Association:</label>
                            <input type='text' name='association' />
                        </p>
                        <p className='col-lg-12'>
                            <label htmlFor='request'>Description:</label>
                            <textarea rows='5' name='request' />
                        </p>
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </>
    )
}

export default RequestForm;