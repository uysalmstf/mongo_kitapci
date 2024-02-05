const isValidCreatePostData = (request, response, next) => {
    
    const data = request.body;
    
    let emptyFields = [];

    if (data.name == null || data.name == "") {
        emptyFields.push("Ad")
    }
    if (data.country == null || data.country == "") {
        emptyFields.push("Ülke")
    }
    if (data.birth_date == null || data.birth_date == "") {
        emptyFields.push("Doğum Tarihi")
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

module.exports = isValidCreatePostData;