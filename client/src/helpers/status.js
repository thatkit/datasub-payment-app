export const getStatus = result => ({
    uninitialized: {
        display: false,
        disabled: false,
        color: '',
        title: ''
    },
    pending: {
        display: true,
        disabled: true,
        color: 'secondary',
        title: 'Processing the payment.',
        message: 'spinner'
    },
    fulfilled: {
        display: true,
        disabled: false,
        color: 'success',
        title: 'Payment successful.',
        message: result.data ? `${Object
            .entries(result.data)
            .map(entry => entry[0] + ': ' + entry[1])
            .join(', ')
        }` : 'Thank you!'
    },
    rejected: {
        display: true,
        disabled: false,
        color: 'warning',
        title: 'Payment failure.',
        message: result.error ? result.error.data.err.message : 'Unknown error.'
    }
})