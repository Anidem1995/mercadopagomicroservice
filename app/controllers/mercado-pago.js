const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken(process.env.PROD_ACCESS_TOKEN);


exports.enviarPago = (req, res) => {
    const payment_data = {
        token: req.body.token,
        issuer_id: req.body.issuer_id,
        payment_method_id: req.body.payment_method_id,
        transaction_amount: Number(req.body.transaction_amount),
        installments: Number(req.body.installments),
        description: req.body,description,
        payer: {
            email: req.body.payer.email,
            identification: {
                type: req.body.identification_type,
                number: req.body.docNumber
            }
        }
    };

    mercadopago.payment.save(payment_data)
        .then((response) => {
            res.status(response.status).json({
                status: response.body.status,
                status_detail: response.body.status_detail,
                id: response.body.id
            });
        })
        .catch((error) => res.status(response.status).send(error));
}