const isValidDeletePostData = (request, response, next) => {
    
    const data = request.body;
    
    let emptyFields = [];

    if (data.id == null || data.id == "") {
        emptyFields.push("Kitap")
    }

    if (emptyFields.length == 0)
        next();
    else
        response.status(403).json({
            'error': true,
            'message': "Bazı alanlar boş. Kontrol ediniz",
            'data': emptyFields
        });
};

module.exports = isValidDeletePostData;