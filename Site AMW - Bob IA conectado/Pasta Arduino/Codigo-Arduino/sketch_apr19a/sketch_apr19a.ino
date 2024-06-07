#include "DHT.h"
#define dht_type DHT11

int dht_pin = A0; // porta analogica
DHT dht_1 = DHT(dht_pin, dht_type);

void setup() { //inicialização do arduino
  Serial.begin(9600);
  dht_1.begin();
}

void loop() { // repetir uma ação
  float umidade = dht_1.readHumidity(); // declaração da variável
  if (isnan(umidade)){
    Serial.println("Erro ao ler");
  } else {
    Serial.println(umidade); //apresenta o valor da variável
  }
  delay(1000); // tempo de inserção de dados
}