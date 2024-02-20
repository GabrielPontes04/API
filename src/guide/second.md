## Simular Libre Amortizacion

Método para simular el alta de un préstamo libre amortizacion en Bantotal.

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.SimularLibreAmortizacion | RBTPG231 | Global      |

> Ejemplo de invocación al método Simular Libre Amortización:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularLibreAmortizacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>fe9c2c642d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:productoUId>75</bts:productoUId>
            <bts:monto>10000</bts:monto>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas/>
            <bts:cantidadCuotas>?</bts:cantidadCuotas>
            <bts:tasa/>
            <bts:cuotasInteres/>
            <bts:pizarra/>
            <bts:cuotasCapital>
            	<bts:sBTCuotaPrestamoAlta>
            		<bts:fechaPago>2020-04-15</bts:fechaPago>
            		<bts:importe>3000</bts:importe>
            	</bts:sBTCuotaPrestamoAlta>
            	<bts:sBTCuotaPrestamoAlta>
            		<bts:fechaPago>2020-05-15</bts:fechaPago>
            		<bts:importe>3000</bts:importe>
            	</bts:sBTCuotaPrestamoAlta>
            	<bts:sBTCuotaPrestamoAlta>
            		<bts:fechaPago>2020-06-15</bts:fechaPago>
            		<bts:importe>4000</bts:importe>
            	</bts:sBTCuotaPrestamoAlta>
            	</bts:cuotasCapital>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.SimularLibreAmortizacion>
   </soapenv:Body>
</soapenv:Envelope>
```

```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacion \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
        "Btinreq": {
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Canal": "BTDIGITAL",
          "Token": "658fcb0b034A8B5C60A82434"
        },
        "sdtPrestamo": {
          "productoUId": "75",
          "monto": "10000",
          "clienteUId": "221",
          "actividad": "1111",
          "cantidadCuotas": "?",
          "cuotasCapital": {
            "sBTCuotaPrestamoAlta": [
              {
                "fechaPago": "2020-04-15",
                "importe": "3000"
              },
              {
                "fechaPago": "2020-05-15",
                "importe": "3000"
              },
              {
                "fechaPago": "2020-06-15",
                "importe": "4000"
              }
            ]
          }
        }
      }'
```

> El POST retornará la siguiente estructura:

```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>fe9c2c642d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>160.74</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>160.74</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>217.73</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3217.73</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>102.21</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>102.21</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>216.38</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3216.38</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>60.37</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>60.37</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>4000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>215.03</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>4215.03</cuota>
               </sBTCuotaSimulacion>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <impuestos>0.00</impuestos>
            <intereses>323.32</intereses>
            <tasaNominalAnual>17.522024</tasaNominalAnual>
            <totalPrestamo>10000.00</totalPrestamo>
            <tasaEfectivaAnual>19.000000</tasaEfectivaAnual>
            <operacionUId>682</operacionUId>
            <tasa>19.000000</tasa>
            <fechaPrimerPago>2020-04-15</fechaPrimerPago>
            <fechaVencimiento>2020-06-15</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Libre TF</nombre>
            </producto>
            <comisiones>0.00</comisiones>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12993</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularLibreAmortizacion</Servicio>
            <Requerimiento/>
            <Fecha>2019-03-06</Fecha>
            <Hora>13:00:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularLibreAmortizacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtSimulacion": {
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "capital": "10000.00",
        "fechaValor": "2018-10-30",
        "cronograma": {
            "sBTCuotaSimulacion": [
                {
                    "otrosConceptos": "0.00",
                    "capital": "2937.53",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "2937.53",
                    "fechaPago": "2020-04-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "3000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "3245.50",
                    "fechaPago": "2020-04-15",
                    "seguros": "245.50"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "102.21",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "102.21",
                    "fechaPago": "2020-05-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "3000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "3244.15",
                    "fechaPago": "2020-05-15",
                    "seguros": "244.15"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "60.37",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "60.37",
                    "fechaPago": "2020-06-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "4000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "4242.80",
                    "fechaPago": "2020-06-15",
                    "seguros": "242.80"
                }
            ]
        },
        "impuestos": "0.00",
        "tasaEfectiva": "0.000000",
        "intereses": "3100.11",
        "tasaNominalAnual": "17.522024",
        "totalPrestamo": "10000.00",
        "tasaEfectivaAnual": "19.000000",
        "operacionUId": "761",
        "tasa": "19.000000",
        "fechaPrimerPago": "2020-04-15",
        "fechaVencimiento": "2020-06-15",
        "plazo": "0",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS CONSUMO, Amortización Libre TF"
        },
        "comisiones": "0.00"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "13299",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularLibreAmortizacion",
        "Fecha": "2019-04-24",
        "Requerimiento": "",
        "Hora": "10:35:16",
        "Canal": "BTDIGITAL"
    }
}'
```

### Datos de entrada

| Nombre             | Tipo              | Comentarios                                                          |
| ------------------ | ----------------- | -------------------------------------------------------------------- |
| sdtPrestamo        | sBTPrestamoAltaLA | Datos de la simulación.                                              |
| generaCuotaInteres | Character         | Indica si se generan cuotas de intereses. [Hidden: Valores 'S'/'N']. |

Los campos del tipo de dato estructurado sBTPrestamoAltaLA son los siguientes:

| Campo          | Tipo                 | Comentarios                                                            |
| -------------- | -------------------- | ---------------------------------------------------------------------- |
| clienteUId\*   | Long                 | Identificador único de cliente.                                        |
| productoUId\*  | Long                 | Identificador único de producto.                                       |
| cantidadCuotas | Long                 | Cantidad de cuotas del préstamo.                                       |
| periodoCuotas  | Long                 | Período entre vencimiento de cada cuota.                               |
| monto          | Double               | Capital solicitado.                                                    |
| pizarra        | Short                | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa           | Double               | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad      | Long                 | Código de actividad (Destino del crédito).                             |
| cuotasCapital  | sBTCuotaPrestamoAlta | Cuotas de capital.                                                     |
| cuotasInteres  | sBTCuotaPrestamoAlta | Cuotas de intereses.                                                   |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios               |
| --------- | ------ | ------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota |
| importe   | Double | Importe de la cuota       |

### Datos de salida

| Nombre        | Tipo                    | Comentarios                  |
| ------------- | ----------------------- | ---------------------------- |
| sdtSimulacion | sBTSimulacionPrestamoLA | Datos del préstamo simulado. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes:

| Campo             | Tipo               | Comentarios              |
| ----------------- | ------------------ | ------------------------ |
| producto          | sBTProducto        | Datos del producto.      |
| capital           | Double             | Capital del préstamo.    |
| intereses         | Double             | Intereses.               |
| tasa              | Double             | Tasa.                    |
| tasaEfectiva      | Double             | Tasa efectiva.           |
| tasaEfectivaAnual | Double             | Tasa efectiva anual.     |
| tasaNominalAnual  | Double             | Tasa nominal anual.      |
| totalPrestamo     | Double             | Total a pagar.           |
| fechaPrimerPago   | Date               | Fecha de primer pago.    |
| fechaValor        | Date               | Fecha valor.             |
| fechaVencimiento  | Date               | Fecha de vencimiento.    |
| impuestos         | Double             | Impuestos.               |
| comisiones        | Double             | Comisiones.              |
| plazo             | Int                | Plazo .                  |
| otrosConceptos    | sBTConcepto        | Importe otros conceptos. |
| cronograma        | sBTCuotaSimulacion | Cronograma del préstamo. |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:

| Campo          | Tipo   | Comentarios                                |
| -------------- | ------ | ------------------------------------------ |
| fechaPago      | Date   | Fecha de pago.                             |
| tipoCuota      | String | Tipo de la cuota (Capital/Interés).        |
| concepto       | String | Concepto.                                  |
| capital        | Double | Monto de capital en la cuota.              |
| interes        | Double | Monto de intereses en la cuota.            |
| seguros        | Double | Monto de seguros en la cuota.              |
| impuestos      | Double | Monto de impuestos en la cuota.            |
| otrosConceptos | Double | Importe correspondiente a otros conceptos. |
| cuota          | Double | Importe total de la cuota.                 |

### Errores

| Código | Descripción                                                        |
| ------ | ------------------------------------------------------------------ |
| 30001  | No se recibió el identificador de cliente.                         |
| 30002  | No se recibió el identificador de producto.                        |
| 30003  | No se recuperó la cuenta para el Identificador.                    |
| 30004  | El Identificador único de Producto es incorrecto.                  |
| 30005  | No se recibió la Fecha de Primer Pago desde el origen.             |
| 30006  | No se recibió el Monto de Capital desde el origen.                 |
| 31001  | La simulación no está vigente.                                     |
| 31002  | La simulación no existe.                                           |
| 40001  | La Cuenta indicada es incorrecta..                                 |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien. |
| 40015  | El Plazo Total indicado es incorrecto.                             |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.       |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.       |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                      |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                 |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.     |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.     |
| 40022  | El período entre Cuotas indicado es incorrecto.                    |
| 40023  | El período entre Cuotas indicado no está preseteado.               |
| 40024  | El Valor Cuota indicado es incorrecto.                             |
| 40025  | El Capital indicado es menor al mínimo permitido.                  |
| 40026  | El Capital indicado es mayor al máximo permitido.                  |
| 40027  | El Capital indicado es incorrecto.                                 |
| 40037  | La Clase de Tasa indicada es incorrecta.                           |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                    |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                      |
| 40048  | El período indicado es incorrecto.                                 |
| 40049  | El Tipo de Tasa indicado es incorrecto.                            |
| 40054  | La Tasa indicada es incorrecta.                                    |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.       |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.       |
| 40076  | El Producto indicado no está Preseteado.                           |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime. |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                 |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Prime. |
