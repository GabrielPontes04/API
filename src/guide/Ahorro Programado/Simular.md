# Simular 

Método para simular el alta de un ahorro programado 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.Simular | RBTPG446 | Global 

> Ejemplo de invocación al método Simular: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.Simular> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>GL</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtDatos> 
            <bts:abono>10000</bts:abono> 
            <bts:productoUid>82</bts:productoUid> 
            <bts:montoTotalAhorrar>0</bts:montoTotalAhorrar> 
            <bts:clienteUid>61</bts:clienteUid> 
            <bts:personaUid>22</bts:personaUid> 
            <bts:diaIncremento>5</bts:diaIncremento> 
            <bts:depositoInicial>1000</bts:depositoInicial> 
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro> 
            <bts:plazo>360</bts:plazo> 
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento> 
         </bts:sdtDatos> 
      </bts:BTAhorroProgramado.Simular> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Simular' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Device": "GL", 
          "Requerimiento": 1, 
          "Token": "01D45E9964612A4C8CCB1055" 
        }, 
        "sdtDatos": { 
          "abono": 10000, 
          "productoUid": 82, 
          "montoTotalAhorrar": 0, 
          "clienteUid": 61, 
          "personaUid": 22, 
          "diaIncremento": 5, 
          "depositoInicial": 1000, 
          "fechaInicioAhorro": "", 
          "plazo": 360, 
          "periodicidadIncremento": 1 
        } 
    }' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTAhorroProgramado.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>MINSTALADOR</Usuario> 
            <Device>GL</Device> 
            <Requerimiento>1</Requerimiento> 
            <Token>01D45E9964612A4C8CCB1055</Token> 
         </Btinreq> 
         <sdtSimulacion> 
            <fechaInicio>2021-01-05</fechaInicio> 
            <cronograma> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>8.49</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>31</plazo> 
                  <fechaPago>2021-01-05</fechaPago> 
                  <capital>1000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>84.38</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>59</plazo> 
                  <fechaPago>2021-02-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>178.36</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>90</plazo> 
                  <fechaPago>2021-03-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>254.79</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>120</plazo> 
                  <fechaPago>2021-04-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>370.68</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>153</plazo> 
                  <fechaPago>2021-05-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>391.23</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>181</plazo> 
                  <fechaPago>2021-06-07</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>518.08</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>212</plazo> 
                  <fechaPago>2021-07-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>622.47</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>244</plazo> 
                  <fechaPago>2021-08-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>643.56</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>273</plazo> 
                  <fechaPago>2021-09-06</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>772.88</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>304</plazo> 
                  <fechaPago>2021-10-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>857.81</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>335</plazo> 
                  <fechaPago>2021-11-05</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
               <SdtsBTCuotaAhorro> 
                  <tasa>10.00</tasa> 
                  <impuestos>0.00</impuestos> 
                  <interes>760.27</interes> 
                  <otrosConceptos></otrosConceptos> 
                  <plazo>360</plazo> 
                  <fechaPago>2021-12-06</fechaPago> 
                  <capital>10000.00</capital> 
               </SdtsBTCuotaAhorro> 
            </cronograma> 
            <simulacionId>741</simulacionId> 
            <depositoInicial>1000.00</depositoInicial> 
            <tasaOriginal>10.00</tasaOriginal> 
            <totalIntereses>5463.00</totalIntereses> 
            <Abono>10000.00</Abono> 
            <totalAhorro>111000.00</totalAhorro> 
            <fechaVencimiento>2021-12-31</fechaVencimiento> 
            <plazo>360</plazo> 
            <producto> 
               <moneda>$</moneda> 
               <papel>$</papel> 
               <productoUId>82</productoUId> 
               <nombre>Ahorro en Sueldo Pesos</nombre> 
            </producto> 
            <periodicidadIncremento>1</periodicidadIncremento> 
            <sucursal>Casa Matriz</sucursal> 
            <totalImpuestos>0.00</totalImpuestos> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>17:21:52</Hora> 
            <Numero>11095</Numero> 
            <Servicio>BTAhorroProgramado.Simular</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.SimularResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Device": "GL", 
          "Requerimiento": 1, 
          "Token": "01D45E9964612A4C8CCB1055" 
        }, 
        "sdtSimulacion": { 
          "fechaInicio": "2021-01-05", 
          "cronograma": { 
            "SdtsBTCuotaAhorro": [ 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 8.49, 
                "otrosConceptos": "", 
                "plazo": 31, 
                "fechaPago": "2021-01-05", 
                "capital": 1000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 84.38, 
                "otrosConceptos": "", 
                "plazo": 59, 
                "fechaPago": "2021-02-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 178.36, 
                "otrosConceptos": "", 
                "plazo": 90, 
                "fechaPago": "2021-03-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 254.79, 
                "otrosConceptos": "", 
                "plazo": 120, 
                "fechaPago": "2021-04-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 370.68, 
                "otrosConceptos": "", 
                "plazo": 153, 
                "fechaPago": "2021-05-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 391.23, 
                "otrosConceptos": "", 
                "plazo": 181, 
                "fechaPago": "2021-06-07", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 518.08, 
                "otrosConceptos": "", 
                "plazo": 212, 
                "fechaPago": "2021-07-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 622.47, 
                "otrosConceptos": "", 
                "plazo": 244, 
                "fechaPago": "2021-08-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 643.56, 
                "otrosConceptos": "", 
                "plazo": 273, 
                "fechaPago": "2021-09-06", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 772.88, 
                "otrosConceptos": "", 
                "plazo": 304, 
                "fechaPago": "2021-10-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 857.81, 
                "otrosConceptos": "", 
                "plazo": 335, 
                "fechaPago": "2021-11-05", 
                "capital": 10000 
              }, 
              { 
                "tasa": 10, 
                "impuestos": 0, 
                "interes": 760.27, 
                "otrosConceptos": "", 
                "plazo": 360, 
                "fechaPago": "2021-12-06", 
                "capital": 10000 
              } 
            ] 
          }, 
          "simulacionId": 741, 
          "depositoInicial": 1000, 
          "tasaOriginal": 10, 
          "totalIntereses": 5463, 
          "Abono": 10000, 
          "totalAhorro": 111000, 
          "fechaVencimiento": "2021-12-31", 
          "plazo": 360, 
          "producto": { 
            "moneda": "$", 
            "papel": "$", 
            "productoUId": 82, 
            "nombre": "Ahorro en Sueldo Pesos" 
          }, 
          "periodicidadIncremento": 1, 
          "sucursal": "Casa Matriz", 
          "totalImpuestos": 0 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Estado": "OK", 
          "Fecha": "2022-11-29", 
          "Hora": "17:21:52", 
          "Numero": 11095, 
          "Servicio": "BTAhorroProgramado.Simular", 
          "Requerimiento": 1, 
          "Canal": "BTDIGITAL" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTSolicitudSimulacionAhorroProgramado | sBTSolicitudSimulacionAhorro | Datos de la simulación. 

Los campos del tipo de dato estructurado sBTSolicitudSimulacionAhorro son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
clienteUId | Long | Identificador único de cliente. 
productoUId | Long | Identificador único de producto. 
fechaInicioAhorro | Date | Fecha de inicio del ahorro. 
depositoInicial | Double | Depósito inicial. 
montoTotalAhorrar | Double | Monto total del ahorro. 
abono | Double | Abono. 
diaIncremento | Int | Día de incremento. 
periodicidadIncremento | Int | Periodicidad de incremento. 
plazo | Int | Plazo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTSimulacionAhorroProgramado | sBTSimulacionAhorroProgramado | Simulación de ahorro programado. 

Los campos del tipo de dato estructurado sBTSimulacionAhorroProgramado son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
simulacionId | Long | Identificador de simulación. 
producto | sBTProducto | Datos del producto. 
sucursal | String | Nombre de la sucursal. 
periodicidadIncremento | Int | Periodicidad de incremento. 
plazo | Int | Plazo. 
fechaInicio | Date | Fecha de inicio. 
depositoInicial | Double | Depósito inicial. 
fechaVencimiento | Date | Fecha de vencimiento. 
tasaOriginal | Double | Tasa original. 
abono | Double | Abono. 
cronograma | sBTCronogramaAhorro | Detalle del cronograma de ahorro. 
totalAhorro | Double | Total del ahorro. 
totalImpuestos | Double | Total de impuestos. 
totalIntereses | Double | Total de intereses. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

Los campos del tipo de dato estructurado sBTCronogramaAhorro son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
sBTCronogramaAhorro | sBTCuotaAhorro | Datos de la cuota de ahorro. 

Los campos del tipo de dato estructurado sBTCuotaAhorro son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago. 
plazo | Int | Plazo. 
capital | Double | Capital. 
interes | Double | Interés. 
impuestos | Double | Impuestos. 
tasa | Double | Tasa. 
otrosConceptos | sBTConcepto | Datos de otros conceptos. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la persona. 
30002 | No se recibió el identificador del cliente. 
30003 | No se recibió el identificador del producto. 
30008 | No se recuperó la persona para el identificador: [Número de Identificador]. 
30009 | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador]. 
30012 | No se recuperó el producto de ahorro para el identificador: [Número de Identificador]. 
40150 | Ocurrio un error al actualizar la información del ahorro. 
40955 | El deposito inicial es superior al total a ahorrar. 

ECHO está desactivado.
