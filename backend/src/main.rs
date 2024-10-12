
use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use serde::Serialize;
use actix_cors::Cors;


#[derive(Deserialize)]
struct cardData {
    CardNumber: String,
    CardHolder: String,
    ExpirationMonth: String,
    ExpirationYear: String,
    CVV: String,
}
#[derive(Serialize)]
enum check_type {
    Pass(bool),
    No(bool),

}

fn check_card_datd(card:&cardData)->check_type{
    if card.CardNumber.len() == 16 && card.CVV.len() == 3 {
        return check_type::Pass(true);
    } else {
        return  check_type::No(false);
    }
}





#[post("/cardData_Post")]
async fn cardData_handler(card: web::Json<cardData>) -> impl Responder {

    match check_card_datd(&card) {
        check_type::Pass(t)=>HttpResponse::Ok().json(t),
        check_type::No(f)=>HttpResponse::Ok().json(f),

    }
}
#[actix_web::main] 
async fn main()->std::io::Result<()> {
    HttpServer::new(||{
       App::new()
       .wrap(
        Cors::default()
            .allowed_origin("http://localhost:3000")  // 允許內部的前端來源
            .allowed_methods(vec!["GET", "POST"])      // 允許 GET 和 POST 請求
            .allowed_headers(vec!["Content-Type"])     // 允許 Content-Type 標頭
            .supports_credentials()                    // 允許憑證傳輸（如 Cookies）
    )
        .service(cardData_handler)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await

}
