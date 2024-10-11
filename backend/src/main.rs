use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use serde::Serialize;

#[derive(Deserialize)]
struct cardData {
    CardNumber: String,
    CardHolder: String,
    ExpirationMonth: String,
    ExpirationYear: String,
    CVV: String,
}
#[derive(Serialize)]
struct check_type {
    ok: bool,
    No_ok: bool,
}

#[post("/cardData_Post")]
async fn cardData_check(card: web::Json<cardData>) -> impl Responder {
    let crad_response = check_type {
        ok: true,
        No_ok: false,
    };
    if card.CardNumber.len() == 16 && card.CVV.len() == 3 {
        HttpResponse::Ok(crad_response.ok)
    }
}

fn main() {}
