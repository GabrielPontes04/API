# Obtener Datos del Próximo Vencimiento 

Método para retornar los datos de próximo vencimiento de cuota. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDatosProxVencimiento | RBTPG526 | Global 

> Ejemplo de invocación al servicio de Obtener Datos Próximo Vencimiento: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDatosProxVencimiento> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
         <bts:fechaConsulta>2020-08-09</bts:fechaConsulta> 
      </bts:BTPrestamos.ObtenerDatosProxVencimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDatosProxVencimiento' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "3JPL6DC33CD84655A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"operacionUId": 9, 
    "fechaConsulta": "2020-08-09" 
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
      <BTPrestamos.ObtenerDatosProxVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>DF1F942C6EC60E8B95BBEA69</Token> 
         </Btinreq> 
         <sdtProxVencimiento> 
            <otrosConceptos></otrosConceptos> 
            <fechaPrimerIncumplimiento>2020-05-09</fechaPrimerIncumplimiento> 
            <deudaVencida>41395.15</deudaVencida> 
            <cantCuoImpagas>12</cantCuoImpagas> 
            <monto>41395.15</monto> 
            <fechaProxVencimiento>2020-08-09</fechaProxVencimiento> 
            <cantCuoPagas>0</cantCuoPagas> 
            <fechaUltPago/> 
            <cantCuoImpVenc>4</cantCuoImpVenc> 
            <cuotaVigente>0.00</cuotaVigente> 
         </sdtProxVencimiento> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16849</Numero> 
            <Servicio>BTPrestamos.ObtenerDatosProxVencimiento</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-26</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>12:27:02</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDatosProxVencimientoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
    "sdtProxVencimiento": { 
        "otrosConceptos": "", 
        "fechaPrimerIncumplimiento": "2020-05-09", 
        "deudaVencida": 41395.15, 
        "cantCuoImpagas": 12, 
        "monto": 41395.15, 
        "fechaProxVencimiento": "2020-08-09", 
        "cantCuoPagas": 0, 
        "fechaUltPago": "", 
        "cantCuoImpVenc": 4, 
        "cuotaVigente": 0 
    }, 
    "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.ObtenerDatosProxVencimiento", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "17:08:56" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de prestamo. 
fechaConsulta | Date | Fecha de consulta. 
modoConsulta | String | [Hidden: Valor fijo '' para este método]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProxVencimiento | sBTProximoVto  | Datos del próximo vencimiento del prestamo. 

Los campos del tipo de dato estructurado sBTProximoVto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaProxVencimiento | Date | Identificador de información adicional. 
monto | Decimal | Valor de información adicional. 
cantCuoPagas | Int | Cantidad de cuotas pagas. 
cantCuoImpVenc | Int | Cantidad de cuotas impagas vencidas. 
fechaUltPago | Date | Fecha de ultimo pago. 
cuotaVigente | Decimal | Cuota vigente. 
deudaVencida | Decimal | Deuda vencida. 
fechaPrimerIncumplimiento | Date | Fecha de primer incumplimiento. 
otrosConceptos | sBTConcepto | Datos de otros conceptos. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó préstamo para el identificador: [Número de Identificador]. 
30006 | La Fecha para Consultas es anterior a la de la Operación. 
30007 | La Operación no es válida para la Solicitud realizada. 
30008 | La Operación se encuentra cancelada. 

 
