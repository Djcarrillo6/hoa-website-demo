// * Nextjs API Endpoint to request access tokens from Asyst

export default async function handler(req, res) {
    const { client_id , app_id, redirect_uri, code } = req.query;
    const data = { ...req.query };
    // console.table(req.query);

    // TODO (1): Destructure 'code' from req.query & POST it to `https://myaccount.powerstonepm.com/integrationApp/token`.
    // * 'await' for tokens to be send back in the response. 
    // TODO (2): Once tokens are received.
    res.status(200).json({ ...data,  success: true });
};