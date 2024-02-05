1- Githubdan proje clone'lanır.
2- .env dosyasına çalıştırılmak istenen port 'PORT' karşısına, çalışılacak mongodb adresi 'MONGO_URL' karşısına yazılır. ben 'mongodb://127.0.0.1:27017/mongotest' adresinde çalıştım.Burada sadece database adı değişecektir.
3- 'docker-compose up --build' ile proje ayağa kaldırılarak test edilebilir.
4- HUBX.postman_collection.json import edilerek ilgili url ler ile test gerçekleştirilir.