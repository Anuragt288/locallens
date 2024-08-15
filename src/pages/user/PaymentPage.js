import React, { useState } from 'react';
import { Button, Form, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateCardNumber = (number) => {
        const regex = /^[0-9]{16}$/;
        return regex.test(number);
    };

    const validateExpiryDate = (date) => {
        const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!regex.test(date)) return false;

        const [month, year] = date.split('/');
        const expiry = new Date(`20${year}`, month - 1);
        const now = new Date();

        return expiry > now;
    };

    const validateCvv = (cvv) => {
        const regex = /^[0-9]{3}$/;
        return regex.test(cvv);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        const errors = {};

        if (!validateCardNumber(cardNumber)) {
            errors.cardNumber = 'Card number must be 16 digits.';
        }

        if (!validateExpiryDate(expiryDate)) {
            errors.expiryDate = 'Expiry date must be in MM/YY format and not in the past.';
        }

        if (!validateCvv(cvv)) {
            errors.cvv = 'CVV must be 3 digits.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        setLoading(true);
        setErrors({});

        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            setPaymentSuccess(true);

            // Redirect to a confirmation page or home after payment
            setTimeout(() => {
                navigate('/user/searchpg'); // Redirect to SearchPg or any other page
            }, 2000);
        }, 2000);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Payment Page</h1>

            {paymentSuccess === null ? (
                <Form onSubmit={handlePayment}>
                    <Form.Group controlId="cardNumber" className="mb-3">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter card number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            isInvalid={!!errors.cardNumber}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.cardNumber}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="expiryDate" className="mb-3">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            isInvalid={!!errors.expiryDate}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.expiryDate}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="cvv" className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            isInvalid={!!errors.cvv}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.cvv}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                {' '}Processing...
                            </>
                        ) : (
                            'Pay Now'
                        )}
                    </Button>
                </Form>
            ) : paymentSuccess ? (
                <Alert variant="success" className="mt-4">
                    Payment successful! Redirecting...
                </Alert>
            ) : (
                <Alert variant="danger" className="mt-4">
                    Payment failed. Please try again.
                </Alert>
            )}
        </div>
    );
}

export default PaymentPage;
