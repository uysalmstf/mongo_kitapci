const isValidCreatePostData = (request, response, next) => {
    
    const data = request.body;
    
    let emptyFields = [];

    if (data.title == null || data.title == "") {
        emptyFields.push("Başlık")
    }
    if (data.author_id == null || data.author_id == "") {
        emptyFields.push("Yazar")
    }
    if (data.price == null || data.price == "") {
        emptyFields.push("Fiyat")
    }
    if (data.isbn == null || data.isbn == "") {
        emptyFields.push("ISBN")
    }
    if (data.lang == null || data.lang == "") {
        emptyFields.push("Dil")
    }
    if (data.page_number == null || data.page_number == "") {
        emptyFields.push("Sayfa Sayısı")
    }
    if (data.publisher == null || data.publisher == "") {
        emptyFields.push("Yayıncı")
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