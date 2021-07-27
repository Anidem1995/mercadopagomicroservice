const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken(process.env.PROD_ACCESS_TOKEN);


exports.enviarPago = (req, res) => {
    const payment_data = {
        transaction_amount: Number(req.body.transactionAmount),
        token: req.body.token,
        description: req.body,description,
        installments: Number(req.body.installments),
        payment_method_id: req.body.paymentMethodId,
        issuer_id: req.body.issuer,
        payer: {
            email: req.body.payer.email,
            identification: {
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