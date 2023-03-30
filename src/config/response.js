// 200
const successCode = (res, data, message) => {
    res.status(200).json({
        statusCode: '200',
        message,
        data
    })
};

// 400
const errorCode = (res, data, message) => {
    res.status(400).json({
        statusCode: '400',
        message,
        data
    })
};

const failCode = (res, message) => {
    res.status(500).json({
        statusCode: '400',
        message
    })
};

module.exports = {successCode, errorCode, failCode}